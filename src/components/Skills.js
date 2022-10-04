import React from 'react';
import htmlImage from "../image/html-css.jpeg";
import jsImage from "../image/js.jpeg";
import reactImage from "../image/react.jpeg";
import kotlinImage from "../image/kotlin.webp";
import bubbleImage from "../image/bubble.jpeg";
import flutterImage from "../image/flutter.jpeg";

function Skills() {
  return (
    <div className='skills-main'>
        <div className='skills-title'>
          <h2>Skills</h2>
          <div className='skills-content'>           
              <div className='skills-html'>
                <img src={htmlImage} />
                <div className='skills-html-subtitle'>
                  HTML/CSS
                  <div className='skills-html-description'>
                    基本的なコーディングは問題ありません。使用エディタはVSCodeです。
                  </div>
                </div>
              </div>

              <div className='skills-javascript'>
                <img src={jsImage} />
                <div className='skills-javascript-subtitle'>
                  JavaScript
                  <div className='skills-javascript-description'>
                    基本的なコーディングは問題ありませんが、Reactを学び始めてからJSに触れ始めたのでぎこちないコードだと思います。
                    使用エディタはVSCodeです。
                  </div>
                </div>
              </div>

              <div className='skills-react'>
                <img src={reactImage} />
                <div className='skills-react-subtitle'>
                  React.js
                  <div className='skills-react-description'>
                    現時点ではReactを触り始めて2週間ちょっとなので、あまり自信はありませんが一通りの文法や基本的なWebサイトを実装する上でのコーディングは理解しました。
                    使用エディタはVSCodeです。
                  </div>
                </div>
              </div>

              <div className='skills-kotlin'>
                <img src={kotlinImage} />
                <div className='skills-kotlin-subtitle'>
                  Kotlin
                  <div className='skills-kotlin-description'>
                    kotlinでの実装経験が一度だけあります。自分にとってなかなか理解が難しい言語なのでまずはフロントエンドの言語を極めてからまた勉強しようと考えています。
                    使用エディタはAndroid Studioです。
                  </div>
                </div>
              </div>

              <div className='skills-flutter'>
                <img src={flutterImage} />
                <div className='skills-flutter-subtitle'>
                  Flutter
                  <div className='skills-flutter-description'>
                    インターン先でFlutterのコードレビューを任せるので触れておいてくださいと言われ、一時期Flutterの勉強をしていました。ログイン機能や簡易的なTodoアプリは作れます。
                    使用エディタはAndroid Studioです。
                  </div>
                </div>

              </div>

              <div className='skills-bubble'>
                <img src={bubbleImage} />
                <div className='skills-bubble-subtitle'>
                  Bubble
                  <div className='skills-bubble-description'>
                    NoCodeのBubbleではチーム開発、個人開発を現在進行形で携わっています。問題なくWebアプリの実装ができます。
                  </div>
                </div>
              </div>
  

            
              

            </div>
          </div>

      
    </div>
  )
}

export default Skills;