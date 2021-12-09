import { FC, ReactNode } from 'react';
import CommentContexProvider from './CommentContex';
import FavoriteContexProvider from './FavoriteContex';

type props = {
  children: ReactNode
}

const combineProviders = (providers: any): FC => providers.reduce(
  (Combined: FC, Provider: FC) => ({ children }: props) => (
    <Combined>
      <Provider>
        {children}
      </Provider>
    </Combined>
  )
);


const ContextProvider = combineProviders([
  FavoriteContexProvider,
  CommentContexProvider
]);

export default ContextProvider;