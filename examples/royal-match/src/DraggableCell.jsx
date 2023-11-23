import { useDraggable } from "@dnd-kit/core";

/**
 * @param {object} props
 * @param {string} props.id
 */
export default function DraggableCell(props) {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id: props.id,
  });

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={{ filter: isDragging ? "brightness(1.25)" : undefined, display: "inherit" }}
    >
      {props.children}
    </div>
  );
}
