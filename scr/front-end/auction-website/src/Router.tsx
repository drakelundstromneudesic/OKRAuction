import { useHistory } from 'react-router-dom';
import { DefaultLayout } from './Layouts/DefaultLayout';
import { AuctionListPage } from './Pages/AuctionList/AuctionListPage';
import { HomePage } from './Pages/Home/HomePage';
import { RouteWrapper } from './ReactWrapper';
import { AUTCTION_LIST_ROUTE, HOME_ROUTE } from './Routes';

export const Router = () => {
  const history = useHistory();

  return (
    <>
      <RouteWrapper exact path={HOME_ROUTE} Component={HomePage} Layout={DefaultLayout} />
      <RouteWrapper exact path={AUTCTION_LIST_ROUTE} Component={AuctionListPage} Layout={DefaultLayout} />

      {
        //   <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
        //     <RouteWrapper path={HOME_ROUTE} Component={HomePage} exact />
        //     <RouteWrapper path={LOGIN_CALLBACK_ROUTE} Component={LoginCallback} />
        //     <RouteWrapper path={CHANGE_PASSWORD_ROUTE} Component={ChangePassword} secure />
        //     <RouteWrapper path={ADMIN_ROUTE} Component={AdminPage} secure />
        //     <RouteWrapper path={JOIN_STREAM_ROUTE} Component={JoinCallPage} exact />
        //     <CallingContextProvider>
        //       <UserCallSettingsContextProvider>
        //         <ActiveCallContextProvider>
        //           <ChatProvider>
        //             <RouteWrapper exact path={STREAM_START_ROUTE} Component={StartStreamPage} Layout={StreamLayout} />
        //             <RouteWrapper path={`${STREAM_START_ROUTE}/:id`} Component={StartStreamPage} Layout={StreamLayout} />
        //             <RouteWrapper path={`${STREAM_HOST_ROUTE}/:id`} Component={HostStreamPage} Layout={StreamLayout} />
        //             <RouteWrapper
        //               path={`${STREAM_ATTENDEE_ROUTE}/:id`}
        //               Component={AttendeeStreamPage}
        //               Layout={StreamLayout}
        //             />
        //             <RouteWrapper path={`${JOIN_STREAM_ROUTE}/:id`} Component={JoinCallPage} Layout={StreamLayout} />
        //           </ChatProvider>
        //         </ActiveCallContextProvider>
        //       </UserCallSettingsContextProvider>
        //     </CallingContextProvider>
        //   </Security>}
      }
    </>
  );
};

function toRelativeUrl(originalUri: string, origin: string): string {
  throw new Error('Function not implemented.');
}
