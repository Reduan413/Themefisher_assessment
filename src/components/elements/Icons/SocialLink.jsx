import Link from "next/link";

function SocialLink({ link, icon: Icon }) {
  return link ? (
    <Link href={link} passHref className="group rounded-full bg-[#202020] p-1 lg:p-2">
      <Icon className="text-xs lg:text-base" />
    </Link>
  ) : null;
}

export default SocialLink;
