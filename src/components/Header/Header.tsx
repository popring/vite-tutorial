// index.tsx
// import styles from './index.module.scss';
import { devDependencies } from '../../../package.json';
import ReactLogo from '@assets/react.svg';

export function Header() {
  return (
    <div>
      {/* <p className={styles.header}>This is Header</p> */}

      <div className="p-20 text-center">
        <h1 className="font-bold text-2xl mb-2">
          vite version: {devDependencies.vite}
        </h1>
      </div>

      <img src={ReactLogo} />
    </div>
  );
}
