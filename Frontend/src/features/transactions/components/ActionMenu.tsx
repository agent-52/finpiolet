import { useEffect, useRef } from "react";
import { Ic } from "./Icon";

interface ActionMenuProps {
  onEdit: () => void;
  onDuplicate: () => void;
  onDelete: () => void;
  onClose: () => void;
}

export function ActionMenu({
  onEdit,
  onDuplicate,
  onDelete,
  onClose,
}: ActionMenuProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose();
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [onClose]);

  return (
    <div className="action-menu" ref={ref}>
      <button
        className="action-menu__item"
        onClick={() => {
          onEdit();
          onClose();
        }}
      >
        <Ic
          paths={[
            "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",
          ]}
          size={14}
          color="#5f6470"
        />
        Edit transaction
      </button>
      <button
        className="action-menu__item"
        onClick={() => {
          onDuplicate();
          onClose();
        }}
      >
        <Ic
          paths={[
            "M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z",
          ]}
          size={14}
          color="#5f6470"
        />
        Duplicate
      </button>
      <button className="action-menu__item" onClick={onClose}>
        <Ic
          paths={[
            "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4",
          ]}
          size={14}
          color="#5f6470"
        />
        Download receipt
      </button>
      <div className="action-menu__divider" />
      <button
        className="action-menu__item action-menu__item--danger"
        onClick={() => {
          onDelete();
          onClose();
        }}
      >
        <Ic
          paths={[
            "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16",
          ]}
          size={14}
          color="#dc2626"
        />
        Delete
      </button>
    </div>
  );
}
