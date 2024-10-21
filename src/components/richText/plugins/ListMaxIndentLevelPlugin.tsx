import { $getListDepth, $isListItemNode, $isListNode } from "@lexical/list";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import {
  $getSelection,
  $isElementNode,
  $isRangeSelection,
  INDENT_CONTENT_COMMAND,
  COMMAND_PRIORITY_HIGH,
  ElementNode,
  RangeSelection,
} from "lexical";
import { useEffect, useCallback } from "react";

function getElementNodesInSelection(selection: RangeSelection): Set<ElementNode> {
  const nodesInSelection = selection.getNodes();

  if (nodesInSelection.length === 0) {
    return new Set([
      selection.anchor.getNode().getParentOrThrow(),
      selection.focus.getNode().getParentOrThrow()
    ]);
  }

  return new Set(
    nodesInSelection.map((n) => ($isElementNode(n) ? n : n.getParentOrThrow()))
  );
}

function isIndentPermitted(maxDepth: number): boolean {
  const selection = $getSelection();

  if (!$isRangeSelection(selection)) {
    return false;
  }

  const elementNodesInSelection = getElementNodesInSelection(selection);

  let totalDepth = 0;
  //@ts-ignore
  for (const elementNode of elementNodesInSelection) {
    if ($isListNode(elementNode)) {
      totalDepth = Math.max($getListDepth(elementNode) + 1, totalDepth);
    } else if ($isListItemNode(elementNode)) {
      const parent = elementNode.getParent();
      if (!$isListNode(parent)) {
        throw new Error(
          "ListMaxIndentLevelPlugin: A ListItemNode must have a ListNode for a parent."
        );
      }

      totalDepth = Math.max($getListDepth(parent) + 1, totalDepth);
    }
  }

  return totalDepth <= maxDepth;
}

interface ListMaxIndentLevelPluginProps {
  maxDepth?: number;
}

export default function ListMaxIndentLevelPlugin({ maxDepth = 7 }: ListMaxIndentLevelPluginProps): null {
  const [editor] = useLexicalComposerContext();

  const handleIndentContent = useCallback(
    () => !isIndentPermitted(maxDepth),
    [maxDepth]
  );

  useEffect(() => {
    return editor.registerCommand<boolean>(
      INDENT_CONTENT_COMMAND,
      handleIndentContent,
      COMMAND_PRIORITY_HIGH
    );
  }, [editor, handleIndentContent]);

  return null;
}