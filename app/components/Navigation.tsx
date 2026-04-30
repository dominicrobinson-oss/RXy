import LegacyNav from '@/components/legacy/NavigationLegacy'

let MainNav: any = null

// Load MainNav only when the mega‑menu feature flag is enabled
if (process.env.NEXT_PUBLIC_ENABLE_MEGA_MENU === 'true') {
  MainNav = require('@/components/navigation/MainNav').default
}

export default function NavigationWrapper(props: any) {
  const enabled = process.env.NEXT_PUBLIC_ENABLE_MEGA_MENU === 'true'

  if (enabled && MainNav) {
    return <MainNav {...props} />
  }

  return <LegacyNav {...props} />
}
