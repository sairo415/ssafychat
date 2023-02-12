import "../../styles/components/common/card-list.css";
import { useState } from 'react';
import { useAppSelector } from "../../hooks/hooks";
import ArrowButton from "../../widget/ArrowButton";
import ReservationCard from "../../widget/ReservationCard";
function CardList(props : any){
    const applyData = useAppSelector(state => state.mentoring.appointmentList.applys);

    let cards: any[] = [];
    let [startIdx, setIdx] = useState(0);
    
    applyData.map((item) => {
        item.times.map((data) => {
            cards.push(<ReservationCard drag={props.drag} info={[item.name, item.numberth, item.email, data]} isAbleDrag={props.isAbleDrag} container={props.container} isEnterable={props.isEnterable} hoverText={props.hoverText}></ReservationCard>)
        });
    });

    // for(let i = startIdx; i < startIdx+4&&props.cardList.length; ++i){
    //     let info = props.cardList[i];
    //     cards.push(<ReservationCard key={i} drag={props.drag} info={[info[0],info[1],info[2],info[3]]} isAbleDrag={props.isAbleDrag} container={props.container} isEnterable={props.isEnterable} hoverText={props.hoverText}></ReservationCard>)
    // }

    return (
    // 카드리스트 전체를 감싸는 컨테이너
    <div className="card_list_container">
            {/* 헤더 */}
            <div className="card_list_header">
                <div className="header_text">
                    {props.header}
                </div>
           </div>

        {/* 카드리스트와 헤더를 감싸는 컨테이너 */}
        <div className="card_list_inner_container">
            {/* 좌 화살표 */}
            <div className="card_list_arrow"  onMouseDown={()=>{
                    if(0 < startIdx){
                        setIdx(startIdx-1);
                    }
                }}>
                <ArrowButton text="<"></ArrowButton>
            </div>

            {/* 카드리스트 */}
            <div className="card_container">
                {/* 카드 */}
                {cards}
            </div>

            {/* 우측 화살표 */}
            <div className="card_list_arrow"  onMouseDown={()=>{
                    if(startIdx+4 < props.cardList.length){
                        setIdx(startIdx+1);
                    }
                }}>
                <ArrowButton text=">"></ArrowButton>
            </div>
        </div>


    </div>
    )
}

export default CardList;