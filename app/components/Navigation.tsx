// app/components/Navigation.tsx

import LegacyNav from '@/components/legacy/NavigationLegacy'
let MainNav: any = null

// Load mega menu only when enabled
if (process.env.NEXT_PUBLIC_ENABLE_MEGA_MENU === 'true') {
  MainNav = require('@/components/navigation/MainNav').default
}

export default function NavigationWrapper(props: any) {
  // If flag is ON and MainNav loaded → use mega menu
  if (process.env.NEXT_PUBLIC_ENABLE_MEGA_MENU === 'true' && MainNav) {
    return <MainNav {...props} />
  }

  // Otherwise → use legacy nav
  return <LegacyNav {...props} />
}
