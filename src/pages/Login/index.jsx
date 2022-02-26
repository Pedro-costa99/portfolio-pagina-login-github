import React from 'react'
import styles from './styles.module.css';
import cx from 'classnames'
import logoGitHub from '../../assets/logo/icon-github.png'

const Login = () => {
  return (
    <>
      <main className={cx(styles.main)}>
        <section className={cx(styles.sectionForm)}>
          <div className={cx(styles.containerImg)}>
            <img src={logoGitHub} alt="Logo GitHub" className={cx(styles.Img)} />
          </div>
          <h1 className={cx(styles.h1)}>Sign in to GitHub</h1>
          <div className={cx(styles.containerForm)}>
            <form>
              <div class="mb-3">
                <label for="exampleInputEmail1" className={cx(styles.label, "form-label")}>Username or email address</label>
                <input type="email" className={cx(styles.input, "form-control")} id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" className={cx(styles.label, "form-label")}>Password</label>
                <input type="password" className={cx(styles.input, "form-control")} id="exampleInputPassword1" />
              </div>
              <div class="d-grid gap-2">
                <button type="submit" className={cx(styles.buttonSignIn, "btn btn-primary")}>Sign in</button>
              </div>
            </form>
          </div>
          <div className={cx(styles.containerLinkLogin)}>
            <span className={cx(styles.span)}>New to GitHub?</span>
            <a href="#" className={cx(styles.linkLogin)}>Create an account.</a>
          </div>
        </section>
      </main>
      <footer>
        <ul className="list-group">
          <li className="list-group-item">An item</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
          <li className="list-group-item">A fourth item</li>
        </ul>
      </footer>
    </>
  )
}

export default Login