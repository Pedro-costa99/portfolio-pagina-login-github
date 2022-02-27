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
            <img src={logoGitHub} alt="Logo GitHub" width='100px' height='60px' className={cx(styles.Img)} />
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
      <footer className={cx(styles.footer)}>
        <ul className={cx(styles.listaFooter, 'row g-0 list-group list-group-horizontal')}>
          <li className={cx(styles.itemListaFooter, 'col-12 col-sm-auto list-group-item')}>
            <a href="#" target="_blank" rel="noopener noreferrer" className={cx(styles.linkFooter)}>Terms</a></li>
          <li className={cx(styles.itemListaFooter, 'col-12 col-sm-auto list-group-item')}>
            <a href="#" target="_blank" rel="noopener noreferrer" className={cx(styles.linkFooter)}>Privacy</a></li>
          <li className={cx(styles.itemListaFooter, 'col-12 col-sm-auto list-group-item')}>
            <a href="#" target="_blank" rel="noopener noreferrer" className={cx(styles.linkFooter)}>Security</a></li>
          <li className={cx(styles.itemListaFooter, styles.itemListaFooterSemMargem, 'col-12 col-sm-auto list-group-item')}>
            <a href="#" target="_blank" rel="noopener noreferrer" className={cx(styles.linkFooter, styles.colorCinza)}>Contact GitHub</a></li>
        </ul>
      </footer>
    </>
  )
}

export default Login