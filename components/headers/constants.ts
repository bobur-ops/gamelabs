import GameIcon from '~/components/ui_icons/GameIcon.vue'
import ToolIcon from '~/components/ui_icons/ToolIcon.vue'
import UserIcon from '~/components/ui_icons/UserIcon.vue'

import TwitterIcon from '~/components/ui_icons/socials/TwitterIcon.vue'
import DiscordIcon from '~/components/ui_icons/socials/DiscordIcon.vue'

import { TWITTER_LINK, DISCORD_LINK } from '@/constants/main'

export const ACTIONS = [
  {
    name: 'Games',
    icon: GameIcon,
  },
  {
    name: 'Tools',
    icon: ToolIcon,
  },
  {
    name: 'For developers',
    icon: UserIcon,
  },
] as const

export const SOCIALS = [
  {
    link: TWITTER_LINK,
    icon: TwitterIcon,
  },
  {
    link: DISCORD_LINK,
    icon: DiscordIcon,
  },
] as const
