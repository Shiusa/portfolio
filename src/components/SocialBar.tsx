import GithubIcon from "@/icons/GithubIcon"
import MailIcon from "@/icons/MailIcon"
import SocialBarTileWrap from "./SocialBarTileWrap"

const SocialBar = () => {
  return (
    <div className="h-screen w-full bg-grisAnthracite">
        <ul>
            <SocialBarTileWrap path="https://github.com/Shiusa?tab=repositories">
              <GithubIcon size={36} className="text-orTamise hover:text-bleuNeon" />
            </SocialBarTileWrap>
            <SocialBarTileWrap path="mailto:kylenguyen60@hotmail.com">
              <MailIcon size={30} className="text-orTamise hover:text-bleuNeon" />
            </SocialBarTileWrap>
        </ul>
    </div>
  )
}

export default SocialBar