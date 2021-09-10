import { ComponentType, Suspense } from 'react';
import { Route, RouteProps } from 'react-router-dom';
import { DefaultLayout } from './Layouts/DefaultLayout';

type RouteWrapperProps = {
  readonly Component: ComponentType;
  readonly Layout?: ComponentType;
  readonly secure?: boolean;
} & RouteProps;

export const RouteWrapper = ({
  Component,

  Layout = DefaultLayout,
  secure = false,
  ...rest
}: RouteWrapperProps): JSX.Element => (
  <Route
    render={() => (
      <Suspense fallback={DefaultFallbackComponent}>
        <Layout>
          <Component />
        </Layout>
      </Suspense>
    )}
    {...rest}
  />
);

const DefaultFallbackComponent = (): JSX.Element => <p>Couldn't Find Page!</p>;
