import { useDroppable } from "@dnd-kit/core";

import DraggableCell from "./DraggableCell";
import { ITEMS } from "./constants";

/**
 * @param {object} props
 * @param {string} props.id
 * @param {string} props.item
 */
export default function Droppable(props) {
  const { setNodeRef } = useDroppable({
    id: props.id,
  });

  return (
    <div ref={setNodeRef} className="item">
      <DraggableCell id={props.id}>
        <img key={props.id} src={ITEMS[props.item]} alt={props.item} data-id={props.id} />
      </DraggableCell>
    </div>
  );
}
