import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

/**
 * @param {object} props
 * @param {string} props.id
 */
export default function DraggableCell(props) {
  const { attributes, listeners, setNodeRef, isDragging, transform } = useDraggable({
    id: props.id,
  });

  const style = {
    transform: CSS.Translate.toString(transform),
  };

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={{ filter: isDragging ? "brightness(1.25)" : undefined, display: "inherit", ...style }}
    >
      {props.children}
    </div>
  );
}
