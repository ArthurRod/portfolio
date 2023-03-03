interface CarouselItemProps {
  width: number;
  children: JSX.Element;
}

export function CarouselItem({ width, children }: CarouselItemProps) {
  return (
    <div className="item" style={{ width: `${width}%` }}>
      {children}
    </div>
  );
}
