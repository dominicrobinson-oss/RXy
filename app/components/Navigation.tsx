import LegacyNav from '@/components/legacy/NavigationLegacy'
let MainNav: any = null
if (process.env.NEXT_PUBLIC_ENABLE_MEGA_MENU === 'true') {
  MainNav = require('@/components/navigation/MainNav').default
}
export default function NavigationWrapper(props: any) {
  if (process.env.NEXT_PUBLIC_ENABLE_MEGA_MENU === 'true' && MainNav) {
    return <MainNav {...props} />
  }
  return <LegacyNav {...props} />
}
