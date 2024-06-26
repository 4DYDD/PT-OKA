export default function Flexc({
  children,
  id,
  className,
  style,
  start,
  center,
  end,
  between,
  around,
  evenly,
  vstart,
  vcenter,
  vend,
  astart,
  acenter,
  aend,
}) {
  return (
    <>
      <div
        id={`${id && id}`}
        className={`
        flex 
        ${start && "justify-start"} 
        ${center && "justify-center"} 
        ${end && "justify-end"} 
        ${between && "justify-between"} 
        ${around && "justify-around"} 
        ${evenly && "justify-evenly"} 
        ${
          !start &&
          !center &&
          !end &&
          !between &&
          !around &&
          !evenly &&
          "justify-center"
        }  
        ${vstart && "items-start"} 
        ${vcenter && "items-center"} 
        ${vend && "items-end"} 
        ${!vstart && !vcenter && !vend && "items-center"}  
        ${astart && "content-start"} 
        ${acenter && "content-center"} 
        ${aend && "content-end"} 
        ${!astart && !acenter && !aend && "content-center"}  
        ${className && className}
        `}
        style={style && style}
      >
        {children}
      </div>
    </>
  );
}
