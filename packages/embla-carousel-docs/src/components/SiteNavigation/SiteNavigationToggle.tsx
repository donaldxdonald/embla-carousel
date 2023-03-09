import React from 'react'
import styled, { css } from 'styled-components'
import { createSquareSizeStyles } from 'utils/createSquareSizeStyles'
import { BareButton } from 'components/Button/BareButton'
import { useNavigation } from 'hooks/useNavigation'
import { NAVIGATION_ID } from './SiteNavigation'
import { COLORS } from 'consts/themes'
import { MEDIA } from 'consts/breakpoints'

const BUTTON_SIZE = '4rem'
const BURGER_SIZE = '2.35rem'

const SiteNavigationToggleWrapper = styled(BareButton)`
  ${createSquareSizeStyles(BUTTON_SIZE)};
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin-left: calc((${BUTTON_SIZE} - ${BURGER_SIZE}) / 2 * -1);
  margin-right: calc((${BUTTON_SIZE} - ${BURGER_SIZE}) / 2 * -1);

  ${MEDIA.DESKTOP} {
    display: none;
  }
`

const Burger = styled.div<{ $isOpen: boolean }>`
  position: relative;
  > span {
    background-color: ${COLORS.TEXT_HIGH_CONTRAST};
    display: block;
    height: 0.2rem;
    border-radius: 0.2rem;
    position: relative;
    width: ${BURGER_SIZE};
    &:before,
    &:after {
      background-color: ${COLORS.TEXT_HIGH_CONTRAST};
      position: absolute;
      content: "";
      border-radius: 0.2rem;
      display: block;
      height: 100%;
      width: 100%;
    }
    &:before {
      transform: translateY(0.8rem);
    }
    &:after {
      transform: translateY(-0.8rem);
    }

    ${({ $isOpen }) => css`
      background-color: ${$isOpen && 'transparent'};
      &:before {
        transform: ${$isOpen && 'rotate(-45deg) translateY(0)'};
      }
      &:after {
        transform: ${$isOpen && 'rotate(45deg) translateY(0)'};
      }
    `}};
  }
`

export const SiteNavigationToggle = () => {
  const { isOpen, toggleNavigation } = useNavigation()
  const toggleAction = isOpen ? 'Hide' : 'Show'

  return (
    <SiteNavigationToggleWrapper
      id={NAVIGATION_ID}
      onClick={toggleNavigation}
      aria-expanded={isOpen}
      aria-label={`${toggleAction} Main Navigation Menu`}
    >
      <Burger $isOpen={isOpen} aria-hidden="true">
        <span />
      </Burger>
    </SiteNavigationToggleWrapper>
  )
}