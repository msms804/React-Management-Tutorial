//특정한 라이브러리 불러올때 사용하는 라이브러리
import React from "react";
//jsx는 내부데이터가 2개이상인경우 div태그로 감싸야
function Customer(props) {//컴포넌트를 계층적으로 만듦
    return (
        <div>
            <CustomerProfile
                src={props.image}
                name={props.name}
                id={props.id} />
            <CustomerInfo
                birthday={props.birthday}
                gender={props.gender}
                job={props.job} />
        </div>
    );
}
//alt속성은 시각장애인?

function CustomerProfile(props) {//사진, 이름, id
    return (
        <div>
            <img src={props.image} alt="profile" />
            <h2>{props.name}({props.id})</h2>
        </div>
    )
}

function CustomerInfo(props) {//하나의 고객에 대한 남은정보 출력
    return (
        <div>
            <p>{props.birthday}</p>
            <p>{props.gender}</p>
            <p>{props.job}</p>
        </div>
    )
}

export default Customer;