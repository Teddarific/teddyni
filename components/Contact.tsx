import { css } from '@emotion/react'
import {
  faGithub,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { aboveBreakpoint } from '../utils/constants'

const styles = {
  icon: css({
    marginRight: '24px',
    width: '24px !important',
    height: '24px !important',
    [aboveBreakpoint.sm]: {
      marginRight: '36px',
      width: '30px !important',
      height: '30px !important',
    },
  }),
  link: css({
    textDecoration: 'none',
  }),
}

export function Contact() {
  return (
    <div css={{ width: '100%', display: 'flex' }}>
      <a
        href="https://www.linkedin.com/in/teddy-ni/"
        target="_blank"
        css={styles.link}
        rel="noreferrer"
      >
        <FontAwesomeIcon
          css={[
            styles.icon,
            {
              color: '#0077b5',
            },
          ]}
          icon={faLinkedinIn}
        />
      </a>
      <a
        href="https://github.com/Teddarific"
        target="_blank"
        css={styles.link}
        rel="noreferrer"
      >
        <FontAwesomeIcon
          css={[
            styles.icon,
            {
              color: 'black',
            },
          ]}
          icon={faGithub}
        />
      </a>
      <a
        href="https://www.instagram.com/teddarific/"
        target="_blank"
        css={styles.link}
        rel="noreferrer"
      >
        <FontAwesomeIcon
          css={[
            styles.icon,
            {
              color: '#bc2a8d',
            },
          ]}
          icon={faInstagram}
        />
      </a>
      <a
        href="https://twitter.com/Teddarific"
        target="_blank"
        css={styles.link}
        rel="noreferrer"
      >
        <FontAwesomeIcon
          css={[
            styles.icon,
            {
              color: '#1DA1F2',
            },
          ]}
          icon={faTwitter}
        />
      </a>
    </div>
  )
}
