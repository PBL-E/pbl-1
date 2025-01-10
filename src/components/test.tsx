import Accordion from 'react-bootstrap/Accordion';

export function TechnologyAccordion() {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header><a href='' className='a-bukatsu'>ロボット技術部</a></Accordion.Header>
        <Accordion.Body>
          活動場所：ものづくり教室
          <br />
          活動日：日曜日以外
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header><a href='#' className='a-bukatsu'>プログラミング部</a></Accordion.Header>
        <Accordion.Body>
          活動場所：CAI教室
          <br />
          活動日：木・金
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header><a href='' className='a-bukatsu'>技術部（エコラン部）</a></Accordion.Header>
        <Accordion.Body>
          活動場所：
          <br />
          活動日：
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header><a href='#' className='a-bukatsu'>技術部（ソーラーカー・EV部）</a></Accordion.Header>
        <Accordion.Body>
          活動場所：
          <br />
          活動日：
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header><a href='#' className='a-bukatsu'>デザイン部</a></Accordion.Header>
        <Accordion.Body>
          活動場所：
          <br />
          活動日：
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export function PEAccordion() {
    return (
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header><a href='' className='a-bukatsu'>陸上競技部</a></Accordion.Header>
          <Accordion.Body>
            活動場所：室内練習場、グラウンド
            <br />
            活動日：日曜日以外
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header><a href='#' className='a-bukatsu'>ソフトテニス部</a></Accordion.Header>
          <Accordion.Body>
            活動場所：
            <br />
            活動日：
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header><a href='' className='a-bukatsu'>サッカー部</a></Accordion.Header>
          <Accordion.Body>
            活動場所：名阪スタジアム
            <br />
            活動日：オフの日以外
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header><a href='#' className='a-bukatsu'>硬式野球部（高校）</a></Accordion.Header>
          <Accordion.Body>
            活動場所：野球場
            <br />
            活動日：ほぼ毎日
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header><a href='#' className='a-bukatsu'>硬式野球部（高専）</a></Accordion.Header>
          <Accordion.Body>
            活動場所：野球場
            <br />
            活動日：月・木・試合日
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header><a href='' className='a-bukatsu'>硬式テニス部</a></Accordion.Header>
          <Accordion.Body>
            活動場所：テニスコート
            <br />
            活動日：日曜日以外
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header><a href='#' className='a-bukatsu'>柔道部</a></Accordion.Header>
          <Accordion.Body>
            活動場所：武道館
            <br />
            活動日：不定
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="7">
          <Accordion.Header><a href='' className='a-bukatsu'>剣道部</a></Accordion.Header>
          <Accordion.Body>
            活動場所：武道館
            <br />
            活動日：月・火・木・金
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="8">
          <Accordion.Header><a href='#' className='a-bukatsu'>バスケットボール部</a></Accordion.Header>
          <Accordion.Body>
            活動場所：体育館
            <br />
            活動日：
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="9">
          <Accordion.Header><a href='#' className='a-bukatsu'>バドミントン部</a></Accordion.Header>
          <Accordion.Body>
            活動場所：体育館
            <br />
            活動日：月・水・金・土
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="10">
          <Accordion.Header><a href='#' className='a-bukatsu'>卓球部</a></Accordion.Header>
          <Accordion.Body>
            活動場所：体育館
            <br />
            活動日：火・木・金・土
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="11">
          <Accordion.Header><a href='#' className='a-bukatsu'>ゴルフ部</a></Accordion.Header>
          <Accordion.Body>
            活動場所：
            <br />
            活動日：
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="12">
          <Accordion.Header><a href='#' className='a-bukatsu'>山岳部</a></Accordion.Header>
          <Accordion.Body>
            活動場所：スターウォール
            <br />
            活動日：火
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    );
  }

  export function CultureAccordion() {
    return (
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header><a href='' className='a-bukatsu'>吹奏楽部</a></Accordion.Header>
          <Accordion.Body>
            活動場所：学生会館2F
            <br />
            活動日：不定
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header><a href='#' className='a-bukatsu'>モータースポーツ部</a></Accordion.Header>
          <Accordion.Body>
            活動場所：
            <br />
            活動日：
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header><a href='' className='a-bukatsu'>ESS部</a></Accordion.Header>
          <Accordion.Body>
            活動場所：225教室
            <br />
            活動日：金曜日の8限限
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header><a href='#' className='a-bukatsu'>サイエンス・気象部</a></Accordion.Header>
          <Accordion.Body>
            活動場所：
            <br />
            活動日：
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header><a href='#' className='a-bukatsu'>イラスト部</a></Accordion.Header>
          <Accordion.Body>
            活動場所：
            <br />
            活動日：
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header><a href='' className='a-bukatsu'>軽音楽部</a></Accordion.Header>
          <Accordion.Body>
            活動場所：コンテナ
            <br />
            活動日：不定
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header><a href='#' className='a-bukatsu'>日本文化研究部（茶道・書道・囲碁将棋）</a></Accordion.Header>
          <Accordion.Body>
            活動場所：学生会館1F部室
            <br />
            活動日：金
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    );
  }

  export function OtherAccordion() {
    return (
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header><a href='' className='a-bukatsu'>園芸同好会</a></Accordion.Header>
          <Accordion.Body>
            活動場所：
            <br />
            活動日：
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header><a href='#' className='a-bukatsu'>ボランティア団体 good job</a></Accordion.Header>
          <Accordion.Body>
            活動場所：
            <br />
            活動日：
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header><a href='' className='a-bukatsu'>学生会</a></Accordion.Header>
          <Accordion.Body>
            活動場所：
            <br />
            活動日：
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header><a href='#' className='a-bukatsu'>帰宅部</a></Accordion.Header>
          <Accordion.Body>
            活動場所：
            <br />
            活動日：
          </Accordion.Body>
        </Accordion.Item>
        </Accordion>
    );
  }