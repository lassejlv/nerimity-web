import RouterEndpoints from '../../common/RouterEndpoints';
import { useParams } from 'solid-app-router';
import { createEffect,  on,} from 'solid-js';
import useStore from '../../chat-api/store/useStore';



export default function ServerSettingsChannel() {
  const {serverId, id: channelId} = useParams();
  const { tabs, channels } = useStore();

  const channel = () => channels.get(channelId);



  
  createEffect(on(channel, () => {
    tabs.openTab({
      title: "Settings - " + channel().name,
      serverId: serverId!,
      iconName: 'settings',
      path: RouterEndpoints.SERVER_SETTINGS_CHANNEL(serverId!, channelId),
    });
  }))


  return (
    <div>
      {channel()?.name}
    </div>
  )
}
