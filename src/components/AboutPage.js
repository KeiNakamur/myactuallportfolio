import React from 'react';
import { Link } from 'react-router-dom';
import myPic from "../image/mypic.jpg";

function AboutPage() {

  const text = `高校は進学校の通っていたため、高校卒業後はクラスの皆と同じように大学に通う予定(通える)と思っていたのですが、自分は親と元々仲が悪かったのですが、進路について相談したところ「大学なんて高いし高校卒業してからでも働けるから意味がない」と言われ学費を払う気ゼロでした。(2つ下の弟は高校卒業後に大学に進学してましたが...)。そんなこんなで卒業後は飲食店で契約社員として働きながら学費をため、また自分が何をしたいのか明確にするためにいろんな勉強をし始めました。経済学であったり、物理学、数学、得意の英語をもっと伸ばそうとしたり。そんな中プログラミングも勉強し始めたところ初めて楽しいと感じ、どうせ働くのであれば自分の好きなことをしようと思いプログラミングに力を入れることに決めました。\n今ではバンタンテックフォードアカデミーに無事入学することができ、フロントエンジニアとして活躍したい、親父の年収を若いうちに越えたいという目標を掲げて毎日勉強しています。`

  return (
    <div className='about'>
      <div className='about-title'>
        <h2>Career</h2>
      </div>
      
      <div className='aboutme'>
        <img src={myPic} />
        <h3>中村圭</h3>
        <hr />
        
        <div className='aboutme-information'>
          <div className='birthday'>
            生年月日
            <div className='birthday-a'>
              1999年12月11日
            </div>
          </div>

          <div className='from'>
            出身地
            <div className='from-a'>
              栃木県
            </div>
          </div>

          <div className='whereami'>
            現住所
            <div className='whereami-a'>
              栃木県
            </div>
          </div>

          <div className='email'>
            連絡先
            <div className='email-a'>
              keinakamura71@gmail.com
            </div>
          </div>
        </div>

        <hr />

        <div className='language'>
          言語
          <div className='language-a'>
            日本語
            <div className='language-aa'>
              -ネイティブレベル
            </div>
          </div>

          <div className='language-b'>
            英語
            <div className='language-bb'>
              -ネイティブレベル
            </div>
          </div>
        </div>

        <hr />

        <div className='hobby'>
          趣味
          <div className='hobby-a'>
            筋トレ
            <div className='hobby-aa'>
              将来フィジーク大会に出場するために日々トレーニング、食事の制限をしています。
              去年まで着てたジャケット等が着れなくなるのが少し勿体無いとどうしても思ってしまいます...
            </div>
          </div>
        </div>
      </div>

      <div className='about-my-career'>
        <h4>プログラミングについて学ぼうと思った経緯</h4>
        <div className='about-my-career-text'>
          {text}
        </div>
      </div>
    </div>
  )
}

export default AboutPage;