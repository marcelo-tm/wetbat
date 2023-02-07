type AvatarProps = {
  picture: string;
};

export function Avatar({ picture }: AvatarProps) {
  return <img src={picture} alt="Avatar" className=" w-10 h-10 rounded-full" />;
}
