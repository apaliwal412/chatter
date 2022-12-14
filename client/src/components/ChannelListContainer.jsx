import React, { useState } from 'react';
import { ChannelList, useChatContext } from 'stream-chat-react';
import Cookies from 'universal-cookie';

import { ChannelSearch, TeamChannelList, TeamChannelPreview } from './';
import th from '../assets/th.jpg'
import LogoutIcon from '../assets/logout.png'

const cookies = new Cookies();

const SideBar = () => (
    <div className="channel-list__sidebar">
        <div className="channel-list__sidebar__icon1">
            <div className="icon1__inner">
                <img src={th} alt="Hospital" width="30" />
            </div>
        </div>
        <div className="channel-list__sidebar__icon2">
            <div className="icon1__inner" >
                <img src={LogoutIcon} alt="Logout" width="30" />
            </div>
        </div>
    </div>
);

const CompanyHeader = () =>(
    <div>
        <p  className="channel-list__header__text">Chatter</p>
    </div>
)

const ChannelListContainer = () => 
{

 return(
        <>
            <SideBar  />
            <div className="channel-list__list__wrapper">
                 <CompanyHeader />
                 <ChannelSearch />
                 <ChannelList
                    filters={{}}
                    channelRenderFilterFn={()=>{}}
                    List={(listProps)=>(
                                <TeamChannelList 
                                {...listProps}
                                type="team"
                                />
                    )}
                    Preview={(PreviewProps)=>(
                        <TeamChannelPreview 
                        {...PreviewProps}
                        type="team"
                        />
                    )}
            />
             <ChannelList
                    filters={{}}
                    channelRenderFilterFn={()=>{}}
                    List={(listProps)=>(
                                <TeamChannelList 
                                {...listProps}
                                type="messaging"
                                />
                    )}
                    Preview={(PreviewProps)=>(
                        <TeamChannelPreview 
                        {...PreviewProps}
                        type="messaging"
                        />
                    )}
            />
        </div>
</>
    )
 }


export default ChannelListContainer;
