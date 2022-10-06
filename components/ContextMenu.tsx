export type ContextMenuProps = {
  // The x position of the context menu
  x: number;
  // The y position of the context menu
  y: number;

  children: React.ReactNode;
};

export default function ContextMenu(props: ContextMenuProps) {
  return (
    <div className="absolute top-0 left-o rounded-md p-4 bg-white dark:bg-black backdrop-blur-sm"></div>
  );
}
