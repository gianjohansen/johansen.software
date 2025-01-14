import React from 'react'
import styles from '@styles/Home.module.css'
import { Container, Row, Col } from 'react-grid-system'

const Contact: React.FC<{}> = () => {
  return (
    <div className={styles.contact}>
      <Container>
        <Row>
          <Col>
            <p id="get-in-touch" className={styles.bigText}>
              Let&apos;s get started
            </p>
            <p className={styles.emailDirect}>
              I am not currently open to new opportunities.
            </p>
            <p className={styles.emailButton}>
              <a href="mailto:hello@johansen.ai">hello@johansen.ai</a>
            </p>
            <p className={styles.socials}>
              <a
                href="https://au.linkedin.com/in/gianjohansen"
                target="_blank"
                rel="noreferrer"
              >
                {' '}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  aria-labelledby="social-link-linkedin"
                >
                  <title id="social-link-linkedin">Linkedin</title>
                  <path d="M19 0H5a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5V5a5 5 0 00-5-5zM8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zM20 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z"></path>
                </svg>
              </a>
              <a
                href="https://github.com/gianjohansen"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  aria-labelledby="social-link-github"
                >
                  <title id="social-link-github">GitHub</title>
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z" />
                </svg>
              </a>
              <a
                href="https://www.goodreads.com/gian-johansen"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  version="1.1"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0H5a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5V5a5 5 0 00-5-5z"></path>
                  <path
                    fill="#000"
                    strokeWidth="1.727"
                    d="M11.948 20.169q-1.077 0-1.927-.29-.829-.27-1.45-.726-.622-.435-1.036-.973-.415-.54-.601-1.078l2.59-1.036q.29.808.953 1.243.663.456 1.471.456 1.285 0 2.03-.808.747-.787.747-2.217v-.704h-.166q-.477.663-1.264 1.056-.767.373-1.823.373-.912 0-1.782-.373-.85-.373-1.513-1.056-.663-.705-1.077-1.679-.415-.974-.415-2.175 0-1.202.415-2.176.414-.995 1.077-1.678.663-.705 1.513-1.078.87-.373 1.782-.373 1.056 0 1.823.394.787.373 1.264 1.036h.166V5.209h2.59v9.427q0 1.285-.394 2.3-.394 1.036-1.098 1.74-.705.726-1.7 1.1-.973.393-2.175.393zm.104-7.149q.497 0 .974-.186.497-.187.87-.539.373-.373.6-.89.229-.54.229-1.223 0-.684-.228-1.223t-.601-.89q-.373-.374-.87-.56-.477-.187-.974-.187t-.974.187q-.477.186-.85.56-.373.372-.6.91-.228.519-.228 1.203 0 .683.228 1.222.227.518.6.891.373.352.85.539.477.186.974.186z"
                  ></path>
                </svg>
              </a>
              <a
                href="https://twitter.com/gianjohansen"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  aria-labelledby="social-link-twitter"
                >
                  <title id="social-link-twitter">Twitter</title>
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-.139 9.237c.209 4.617-3.234 9.765-9.33 9.765-1.854 0-3.579-.543-5.032-1.475 1.742.205 3.48-.278 4.86-1.359-1.437-.027-2.649-.976-3.066-2.28.515.098 1.021.069 1.482-.056-1.579-.317-2.668-1.739-2.633-3.26.442.246.949.394 1.486.411-1.461-.977-1.875-2.907-1.016-4.383 1.619 1.986 4.038 3.293 6.766 3.43-.479-2.053 1.08-4.03 3.199-4.03.943 0 1.797.398 2.395 1.037.748-.147 1.451-.42 2.086-.796-.246.767-.766 1.41-1.443 1.816.664-.08 1.297-.256 1.885-.517-.439.656-.996 1.234-1.639 1.697z" />
                </svg>
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Contact
