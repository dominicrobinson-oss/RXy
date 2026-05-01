'use client'

import React, { useEffect, useRef, useState } from 'react'
import LegacyNav from '@/components/legacy/NavigationLegacy'

import MegaMenuTrending from './MegaMenuTrending'
import MegaMenuProtein from './MegaMenuProtein'
import MegaMenuSupplements from './MegaMenuSupplements'
import MegaMenuVitamins from './MegaMenuVitamins'
import MegaMenuSnacks from './MegaMenuSnacks'
import MegaMenuAccessories from './MegaMenuAccessories'
import MegaMenuCollabs from './MegaMenuCollabs'
import MegaMenuClearance from './MegaMenuClearance'

const OPEN_DELAY = 40
const CLOSE_DELAY = 200

export default function MainNav() {
  const [isMounted, setIsMounted] = useState(false)
  const [isTouch, setIsTouch] = useState(false)
  const [openMenu, setOpenMenu] = useState<string | null>(null)

  const openTimer = useRef<NodeJS.Timeout | null>(null)
  const closeTimer = useRef<NodeJS.Timeout | null>(null)
  const navRef = useRef<HTMLDivElement>(null)

  // Mount guard + touch detection
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true)
    const touch =
      'ontouchstart' in window || navigator.maxTouchPoints > 0
    setIsTouch(touch)
  }, [])

  // Outside click closes menu
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenMenu(null)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  // Escape closes menu
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpenMenu(null)
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [])

  // Hover open
  const openWithDelay = (menu: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    openTimer.current = setTimeout(() => setOpenMenu(menu), OPEN_DELAY)
  }

  // Hover close
  const closeWithDelay = () => {
    if (openTimer.current) clearTimeout(openTimer.current)
    closeTimer.current = setTimeout(() => setOpenMenu(null), CLOSE_DELAY)
  }

  const focusFirstLink = (menu: string) => {
    requestAnimationFrame(() => {
      const firstLink = document.querySelector(
        `#megamenu-${menu} a`
      ) as HTMLElement | null

      if (firstLink) {
        firstLink.focus()
      }
    })
  }

  const navButtonClass =
    "relative px-3 py-2 text-[15px] font-semibold tracking-[0.3px] hover:text-black after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:h-[2px] after:w-full after:bg-black after:scale-x-0 after:origin-center after:transition-transform after:duration-200 hover:after:scale-x-100"

  // Keyboard support
  const handleButtonKeyDown = (e: React.KeyboardEvent, menu: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      setOpenMenu(openMenu === menu ? null : menu)
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setOpenMenu(menu)
      focusFirstLink(menu)
    }
  }

  // Pre-mount → legacy nav
  if (!isMounted) return <LegacyNav />

  // Touch devices → legacy nav
  if (isTouch) return <LegacyNav />

  return (
    <nav ref={navRef} className="relative bg-white border-b border-gray-200">
      <div className="max-w-screen-xl mx-auto px-4">
        <ul className="flex flex-wrap gap-x-6 min-h-14 items-center">

          {/* TRENDING */}
          <li
            className="relative inline-block"
            onMouseEnter={() => openWithDelay('trending')}
            onMouseLeave={closeWithDelay}
          >
            <button
              aria-haspopup="true"
              aria-expanded={openMenu === 'trending' ? 'true' : 'false'}
              aria-controls="megamenu-trending"
              onClick={(e) => {
                e.preventDefault()
                setOpenMenu(openMenu === 'trending' ? null : 'trending')
              }}
              onKeyDown={(e) => handleButtonKeyDown(e, 'trending')}
              className={navButtonClass}
            >
              Trending
            </button>
            {openMenu === 'trending' && <MegaMenuTrending />}
          </li>

          {/* PROTEIN */}
          <li
            className="relative inline-block"
            onMouseEnter={() => openWithDelay('protein')}
            onMouseLeave={closeWithDelay}
          >
            <button
              aria-haspopup="true"
              aria-expanded={openMenu === 'protein' ? 'true' : 'false'}
              aria-controls="megamenu-protein"
              onClick={(e) => {
                e.preventDefault()
                setOpenMenu(openMenu === 'protein' ? null : 'protein')
              }}
              onKeyDown={(e) => handleButtonKeyDown(e, 'protein')}
              className={navButtonClass}
            >
              Protein
            </button>
            {openMenu === 'protein' && <MegaMenuProtein />}
          </li>

          {/* SUPPLEMENTS */}
          <li
            className="relative inline-block"
            onMouseEnter={() => openWithDelay('supplements')}
            onMouseLeave={closeWithDelay}
          >
            <button
              aria-haspopup="true"
              aria-expanded={openMenu === 'supplements' ? 'true' : 'false'}
              aria-controls="megamenu-supplements"
              onClick={(e) => {
                e.preventDefault()
                setOpenMenu(openMenu === 'supplements' ? null : 'supplements')
              }}
              onKeyDown={(e) => handleButtonKeyDown(e, 'supplements')}
              className={navButtonClass}
            >
              Supplements
            </button>
            {openMenu === 'supplements' && <MegaMenuSupplements />}
          </li>

          {/* VITAMINS */}
          <li
            className="relative inline-block"
            onMouseEnter={() => openWithDelay('vitamins')}
            onMouseLeave={closeWithDelay}
          >
            <button
              aria-haspopup="true"
              aria-expanded={openMenu === 'vitamins' ? 'true' : 'false'}
              aria-controls="megamenu-vitamins"
              onClick={(e) => {
                e.preventDefault()
                setOpenMenu(openMenu === 'vitamins' ? null : 'vitamins')
              }}
              onKeyDown={(e) => handleButtonKeyDown(e, 'vitamins')}
              className={navButtonClass}
            >
              Vitamins
            </button>
            {openMenu === 'vitamins' && <MegaMenuVitamins />}
          </li>

          {/* SNACKS */}
          <li
            className="relative inline-block"
            onMouseEnter={() => openWithDelay('snacks')}
            onMouseLeave={closeWithDelay}
          >
            <button
              aria-haspopup="true"
              aria-expanded={openMenu === 'snacks' ? 'true' : 'false'}
              aria-controls="megamenu-snacks"
              onClick={(e) => {
                e.preventDefault()
                setOpenMenu(openMenu === 'snacks' ? null : 'snacks')
              }}
              onKeyDown={(e) => handleButtonKeyDown(e, 'snacks')}
              className={navButtonClass}
            >
              Bars, Snacks & Foods
            </button>
            {openMenu === 'snacks' && <MegaMenuSnacks />}
          </li>

          {/* ACCESSORIES */}
          <li
            className="relative inline-block"
            onMouseEnter={() => openWithDelay('accessories')}
            onMouseLeave={closeWithDelay}
          >
            <button
              aria-haspopup="true"
              aria-expanded={openMenu === 'accessories' ? 'true' : 'false'}
              aria-controls="megamenu-accessories"
              onClick={(e) => {
                e.preventDefault()
                setOpenMenu(openMenu === 'accessories' ? null : 'accessories')
              }}
              onKeyDown={(e) => handleButtonKeyDown(e, 'accessories')}
              className={navButtonClass}
            >
              Accessories
            </button>
            {openMenu === 'accessories' && <MegaMenuAccessories />}
          </li>

          {/* COLLABS */}
          <li
            className="relative inline-block"
            onMouseEnter={() => openWithDelay('collabs')}
            onMouseLeave={closeWithDelay}
          >
            <button
              aria-haspopup="true"
              aria-expanded={openMenu === 'collabs' ? 'true' : 'false'}
              aria-controls="megamenu-collabs"
              onClick={(e) => {
                e.preventDefault()
                setOpenMenu(openMenu === 'collabs' ? null : 'collabs')
              }}
              onKeyDown={(e) => handleButtonKeyDown(e, 'collabs')}
              className={navButtonClass}
            >
              Collabs
            </button>
            {openMenu === 'collabs' && <MegaMenuCollabs />}
          </li>

          {/* CLEARANCE */}
          <li
            className="relative inline-block"
            onMouseEnter={() => openWithDelay('clearance')}
            onMouseLeave={closeWithDelay}
          >
            <button
              aria-haspopup="true"
              aria-expanded={openMenu === 'clearance' ? 'true' : 'false'}
              aria-controls="megamenu-clearance"
              onClick={(e) => {
                e.preventDefault()
                setOpenMenu(openMenu === 'clearance' ? null : 'clearance')
              }}
              onKeyDown={(e) => handleButtonKeyDown(e, 'clearance')}
              className={navButtonClass}
            >
              Clearance
            </button>
            {openMenu === 'clearance' && <MegaMenuClearance />}
          </li>

        </ul>
      </div>
    </nav>
  )
}
