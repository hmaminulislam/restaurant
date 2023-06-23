import { FaPlus, FaMinus } from "react-icons/fa";
import { Collapse } from "react-collapse";

function Accordion({ title, body, open, toggle }) {
  return (
    <div className="border">
      <div
        onClick={toggle}
        className="flex items-center justify-between p-[20px] cursor-pointer"
      >
        <h4 className="font-[600] text-secondary">{title}</h4>
        <span>{open ? <FaMinus /> : <FaPlus />}</span>
      </div>
      <Collapse isOpened={open}>
        <p className="px-[20px] pt-[10px] pb-[30px] border border-t-0 text-gray-600">
          {body}
        </p>
      </Collapse>
    </div>
  );
}

export default Accordion