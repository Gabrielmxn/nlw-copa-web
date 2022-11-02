interface AvatarProps {
  src: string
}

export function Avatar({src}: AvatarProps){
  return(
    <img 
      className="inline-block h-12 w-12 rounded-full ring-2 ring-gray-900" 
      src={src}
      alt=""
    />
  )
}