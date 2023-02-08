import { Banner } from "../components/Banner";
import { Panel } from "../components/Panel";
import {
  ForwardIcon,
  ClockIcon,
  EnvelopeIcon,
  PaperAirplaneIcon,
  ChatBubbleLeftIcon,
  ChartBarIcon,
  ChartPieIcon,
  HandThumbUpIcon,
} from "@heroicons/react/24/outline";

import { QuickQuote, QuickQuoteActions } from "../components/Panels/QuickQuote";
import {
  PendingQuotes,
  PendingQuotesActions,
} from "../components/Panels/PendingQuotes";
import { NewLeads, NewLeadsActions } from "../components/Panels/NewLeads";
import {
  PopularDestinations,
  PopularDestinationsActions,
} from "../components/Panels/PopularDestinations";
import { TeamChat, TeamChatActions } from "../components/Panels/TeamChat";
import { Revenue, RevenueActions } from "../components/Panels/Revenue";
import {
  PotentialRevenue,
  PotentialRevenueActions,
} from "../components/Panels/PotentialRevenue";
import { CloseRatio, CloseRatioActions } from "../components/Panels/CloseRatio";

import info from "../data/banner_info.json";
import teamData from "../data/team_chat.json";

export function HomePage() {
  return (
    <div className="p-5 w-full grid grid-cols-3 gap-x-4 gap-y-8">
      <Banner info={info} className="col-span-3" />

      <Panel
        icon={<ForwardIcon />}
        title="Quick quote"
        actions={<QuickQuoteActions />}
      >
        <QuickQuote />
      </Panel>

      <Panel
        icon={<ClockIcon />}
        title="Pending quotes"
        actions={<PendingQuotesActions />}
      >
        <PendingQuotes />
      </Panel>

      <Panel
        icon={<EnvelopeIcon />}
        title="New leads"
        actions={<NewLeadsActions />}
      >
        <NewLeads />
      </Panel>

      <Panel
        icon={<PaperAirplaneIcon />}
        title="Popular destinations & packages"
        actions={<PopularDestinationsActions />}
        className="col-span-2"
      >
        <PopularDestinations />
      </Panel>

      <Panel
        icon={<ChatBubbleLeftIcon />}
        title="Team chat"
        actions={<TeamChatActions />}
      >
        <TeamChat list={teamData} />
      </Panel>

      <Panel
        icon={<ChartBarIcon />}
        title="Revenue"
        actions={<RevenueActions />}
      >
        <Revenue />
      </Panel>

      <Panel
        icon={<ChartPieIcon />}
        title="Potential revenue"
        actions={<PotentialRevenueActions />}
      >
        <PotentialRevenue />
      </Panel>

      <Panel
        icon={<HandThumbUpIcon />}
        title="Close ratios"
        actions={<CloseRatioActions />}
      >
        <CloseRatio />
      </Panel>
    </div>
  );
}
