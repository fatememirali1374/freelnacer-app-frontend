import { HiCollection, HiCurrencyDollar } from "react-icons/hi";
import Stat from "../../ui/Stat";
import {toPersianNumbersWithComma} from "../../utils/toPersianNumbers"
function Stats({ proposals }) {

    const numOfProposals = proposals.length;
    const acceptedProposals = proposals.filter((p) => p.status === 2);
    const balance = acceptedProposals.reduce((acc, curr) => curr.price + acc, 0)
   
    return (
        <div className=" grid  grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">

            <Stat title=" درخواست ها" value={numOfProposals} icon={<HiCollection className=" w-20 h-20" />} color="yellow" />
            <Stat title=" درخواست های تایید شده" value={acceptedProposals.length} icon={<HiCollection className=" w-20 h-20" />} color="green" />
            <Stat title="  کیف پول شما" value={toPersianNumbersWithComma(balance)} icon={<HiCurrencyDollar className=" w-20 h-20" />} color="yellow" />

        </div>
    )
}

export default Stats