import NotificationContent from "./NotificationContent";

function Notification() {
  return (
    <div className="mt-[24px] px-4">
      <NotificationContent
        date="10.07"
        title="스너글 라운지 공연"
        content={`이렇게 반가운 공지는 오랜만이네요.
        \n드디어 멋쟁이 사자처럼이 아기사자들을 위한 공연 소식을 들고 찾아왔습니다. 모처럼 좋은 기회를 얻어 스너글 라운지에 서게 된 만큼 더욱 즐거운 공연 준비하고 있습니다.
        \n많은 관심 부탁드립니다!`}
      />
      <NotificationContent
        date="09.27"
        title="9월 마지막 스케줄"
        content={`드디어 멋쟁이 사자처럼이 아기사자들을 위한 공연 소식을 들고 찾아왔습니다. 모처럼 좋은 기회를 얻어 스너글 라운지에 서게 된 만큼 더욱 즐거운 공연 준비하고 있습니다.
        \n많은 관심 부탁드립니다!`}
      />
    </div>
  );
}

export default Notification;
