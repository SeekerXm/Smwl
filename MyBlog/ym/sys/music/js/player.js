//创建一个音乐播放器的类 单例模式

class Player {
    constructor() { //类的构造函数
        //如果类已经有实例了，就返回这个实例
        if (Player.instance) return Player.instance;
        //如果没有实例化，就去构造一个实例
        return this.getInstance(...arguments);
    }

    //构建实例
    getInstance() {
        let instance = new PlayerCreator(...arguments);
        //让实例可以使用到Player的原型的属性方法
        // instance.__proto__=Player.prototype;
        // instance.constructor=Player;
        //把构建好的实例挂在Player类上
        Player.instance = instance;
        return instance;
    }
}

//歌曲信息
class Musics {
    //歌曲
    constructor() {
        this.songs = [{
                id: 1,
                title: '1.海底 - 一支榴莲',
                singer: '一支榴莲',
                songUrl: 'http://music.163.com/song/media/outer/url?id=1426649237.mp3',
                imageUrl: 'http://p1.music.126.net/swcW0FE-__ihfjnJqU22Qg==/109951164696345792.jpg'
            },
            {
                id: 2,
                title: '2.海底 - cococola',
                singer: 'cococola',
                songUrl: 'http://music.163.com/song/media/outer/url?id=1449213110.mp3',
                imageUrl: 'http://p2.music.126.net/sesgV_rFUjwzc3eHakpa-w==/109951165005942396.jpg?param=300x300'
            },
            {
                id: 3,
                title: '3.麻雀 - 李荣浩',
                singer: '李荣浩',
                songUrl: 'http://music.163.com/song/media/outer/url?id=1407551413.mp3',
                imageUrl: 'http://p2.music.126.net/JzsER44sOReoM6mR8XKnsw==/109951165182029540.jpg?param=300x300'
            },
			{
			    id: 4,
			    title: '4.尽头 - 赵方婧',
			    singer: '赵方婧',
			    songUrl: 'http://music.163.com/song/media/outer/url?id=444267766.mp3',
			    imageUrl: 'http://p2.music.126.net/c0VxHYdzc0GGFM68YKCYxA==/3315027565433520.jpg?param=300x300'
			},
			{
			    id: 5,
			    title: '5.踏山河（翻自 是七叔呢） - 南浔',
			    singer: '南浔',
			    songUrl: 'http://music.163.com/song/media/outer/url?id=1498887139.mp3',
			    imageUrl: 'http://p1.music.126.net/f-UiDtluEhzXkg35_4BO3g==/109951164964083570.jpg?param=300x300'
			},
			{
			    id: 6,
			    title: '6.撤退 - 珊爷',
			    singer: '珊爷',
			    songUrl: 'http://music.163.com/song/media/outer/url?id=547973126.mp3',
			    imageUrl: 'http://p2.music.126.net/GOXuP5pJdFrbmIyK88RR8w==/109951163209903916.jpg?param=130y130'
			},
			{
			    id: 7,
			    title: '7.泡沫 (Live) - G.E.M.邓紫棋',
			    singer: 'G.E.M.邓紫棋',
			    songUrl: 'http://music.163.com/song/media/outer/url?id=28427707.mp3',
			    imageUrl: 'http://p1.music.126.net/FFCQQMYJA3n2Ig9bS6Lh2g==/5890083790192984.jpg?param=300x300'
			},
			{
			    id: 8,
			    title: '8.天下 - 等什么君',
			    singer: '等什么君',
			    songUrl: 'http://music.163.com/song/media/outer/url?id=1452045674.mp3',
			    imageUrl: 'http://p2.music.126.net/upuTgntcFVCc7O6QWluNSQ==/109951165027170685.jpg?param=300x300'
			},
			{
			    id: 9,
			    title: '9.游京 - 海伦',
			    singer: '海伦',
			    songUrl: 'http://music.163.com/song/media/outer/url?id=1368398851.mp3',
			    imageUrl: 'http://p2.music.126.net/ZfZiOhGh9dHwralCMgmmGw==/109951164515741054.jpg?param=300x300'
			},
			{
			    id: 10,
			    title: '10.耗尽 - 薛之谦,郭聪明',
			    singer: '薛之谦,郭聪明',
			    songUrl: 'http://music.163.com/song/media/outer/url?id=1495058484.mp3',
			    imageUrl: 'http://p1.music.126.net/yITtaf5rX2hOXQSBn60opA==/109951165498613448.jpg?param=300x300'
			},
			{
			    id: 11,
			    title: '11.茫 - 李润祺',
			    singer: '李润祺',
			    songUrl: 'http://music.163.com/song/media/outer/url?id=1498342485.mp3',
			    imageUrl: 'http://p1.music.126.net/qgyYbmmhKqr5A8UqwDk_4A==/109951165465934812.jpg?param=300x300'
			},
			{
			    id: 12,
			    title: '12.我很好（吉他版） - 刘大壮',
			    singer: '刘大壮',
			    songUrl: 'http://music.163.com/song/media/outer/url?id=1491221473.mp3',
			    imageUrl: 'http://p2.music.126.net/qGIzwzf05taTVfk9PSnSiw==/109951165424768428.jpg?param=300x300'
			},
			{
			    id: 13,
			    title: '13.是但求其爱 - 陈奕迅',
			    singer: '陈奕迅',
			    songUrl: 'http://music.163.com/song/media/outer/url?id=1496602290.mp3',
			    imageUrl: 'http://p2.music.126.net/flFrObLA9GZdj8B0b6ni1A==/109951165480807278.jpg?param=300x300'
			},
			{
			    id: 14,
			    title: '14.多想在平庸的生活拥抱你 - 隔壁老樊',
			    singer: '隔壁老樊',
			    songUrl: 'http://music.163.com/song/media/outer/url?id=1346104327.mp3',
			    imageUrl: 'http://p1.music.126.net/gNbAlXamNjhR2j3aOukNhg==/109951164232796511.jpg?param=300x300'
			},
			{
			    id: 15,
			    title: '15.想象 (Live) - 摩登兄弟刘宇宁',
			    singer: '摩登兄弟刘宇宁',
			    songUrl: 'http://music.163.com/song/media/outer/url?id=1308782761.mp3',
			    imageUrl: 'http://p1.music.126.net/f2JYJHONZPZa08d6aOeDvQ==/109951163561062632.jpg?param=300x300'
			},
			{
			    id: 16,
			    title: '16.经济舱 (Live) - Kafe.Hu',
			    singer: 'Kafe.Hu',
			    songUrl: 'http://music.163.com/song/media/outer/url?id=1487528112.mp3',
			    imageUrl: 'http://p2.music.126.net/iXfcMxrGisgh5Dxkc3HTFQ==/109951165393530790.jpg?param=300x300'
			},
			{
			    id: 17,
			    title: '17.作曲家 - 李荣浩',
			    singer: '李荣浩',
			    songUrl: 'http://music.163.com/song/media/outer/url?id=1491221473.mp3',
			    imageUrl: 'http://p2.music.126.net/qGIzwzf05taTVfk9PSnSiw==/109951165424768428.jpg?param=300x300'
			},
			{
			    id: 18,
			    title: '18.李白 - 李荣浩',
			    singer: '李荣浩',
			    songUrl: 'http://music.163.com/song/media/outer/url?id=27678655.mp3',
			    imageUrl: 'http://p1.music.126.net/0uZ_bKtm4E188Uk9LFN1qg==/109951163187393370.jpg?param=300x300'
			},
			{
			    id: 19,
			    title: '19.模特 - 李荣浩',
			    singer: '李荣浩',
			    songUrl: 'http://music.163.com/song/media/outer/url?id=27731176.mp3',
			    imageUrl: 'http://p2.music.126.net/0uZ_bKtm4E188Uk9LFN1qg==/109951163187393370.jpg?param=300x300'
			},
			{
			    id: 20,
			    title: '20.老街 - 李荣浩',
			    singer: '李荣浩',
			    songUrl: 'http://music.163.com/song/media/outer/url?id=133998.mp3',
			    imageUrl: 'http://p2.music.126.net/fZFrplIVrHMx4lvgdqiIHQ==/42880953496261.jpg?param=300x300'
			},
			{
			    id: 21,
			    title: '21.年少有为 - 李荣浩',
			    singer: '李荣浩',
			    songUrl: 'http://music.163.com/song/media/outer/url?id=1293886117.mp3',
			    imageUrl: 'http://p2.music.126.net/tt8xwK-ASC2iqXNUXYKoDQ==/109951163606377163.jpg?param=300x300'
			},
			{
			    id: 22,
			    title: '22.醉赤壁 - 林俊杰',
			    singer: '林俊杰',
			    songUrl: 'http://sr.sycdn.kuwo.cn/a7b90609569972091546c999240e0639/5fd0785f/resource/n2/57/54/1345368777.mp3',
			    imageUrl: 'http://p2.music.126.net/s6zFxvXe5kOxub4_x4rZhQ==/109951163052847567.jpg?param=300x300'
			},
			{
			    id: 23,
			    title: '23.背对背拥抱 - 林俊杰',
			    singer: '林俊杰',
			    songUrl: 'http://music.163.com/song/media/outer/url?id=27731362.mp3',
			    imageUrl: 'http://p1.music.126.net/xDXFDVKPGniFsckE44kZjQ==/109951163076917340.jpg?param=300x300'
			},
			{
			    id: 24,
			    title: '24.不潮不用花钱 - 林俊杰',
			    singer: '林俊杰',
			    songUrl: 'http://music.163.com/song/media/outer/url?id=26305540.mp3',
			    imageUrl: 'http://p1.music.126.net/FdounvSUt2anQ9FBhdatzQ==/2304576371881308.jpg?param=300x300'
			},
			{
			    id: 25,
			    title: '25.她说 - 林俊杰',
			    singer: '林俊杰',
			    songUrl: 'http://music.163.com/song/media/outer/url?id=25638767.mp3',
			    imageUrl: 'http://p2.music.126.net/dI9UCcU9Qx_qLdowsc2z2w==/1406275388402888.jpg?param=300x300'
			},
			{
			    id: 26,
			    title: '26.当你 - 林俊杰',
			    singer: '林俊杰',
			    songUrl: 'http://antiserver.kuwo.cn/anti.s?useless=/resource/&format=mp3&rid=MUSIC_150389210&response=res&type=convert_url&',
			    imageUrl: 'http://p1.music.126.net/peLODpaxX1Hl4RWYKR-34Q==/109951163071284933.jpg?param=300x300'
			},
			{
			    id: 27,
			    title: '27.第二履历 - Am',
			    singer: 'Am',
			    songUrl: 'http://music.163.com/song/media/outer/url?id=1327339115.mp3',
			    imageUrl: 'http://p2.music.126.net/EwinkxB_RdScQyO5yKvGSQ==/109951163680107440.jpg?param=300x300'
			},
			{
			    id: 28,
			    title: '28.江南 - 林俊杰',
			    singer: '林俊杰',
			    songUrl: 'http://music.163.com/song/media/outer/url?id=26305527.mp3',
			    imageUrl: 'http://p2.music.126.net/FdounvSUt2anQ9FBhdatzQ==/2304576371881308.jpg?param=300x300'
			},
			{
			    id: 29,
			    title: '29.胭脂粉 - 周末',
			    singer: '周末',
			    songUrl: 'http://music.163.com/song/media/outer/url?id=1359568677.mp3',
			    imageUrl: 'http://p1.music.126.net/Kz1kapJg2NZPQfcVVSYf9Q==/109951164007548830.jpg?param=300x300'
			},
			{
			    id: 30,
			    title: '30.谪仙 - 伊格赛听,叶里',
			    singer: '伊格赛听,叶里',
			    songUrl: 'http://music.163.com/song/media/outer/url?id=1421256202.mp3',
			    imageUrl: 'http://p1.music.126.net/X-ZQ6wkyaL9cJTiyxmDhuw==/109951164680974796.jpg?param=300x300'
			},
			{
			    id: 31,
			    title: '31.努力工作吧 - 赛文&GOD',
			    singer: '赛文&GOD',
			    songUrl: 'http://music.163.com/song/media/outer/url?id=1500788926.mp3',
			    imageUrl: 'http://p2.music.126.net/me4IQ0mkD19oDZABv8OfEw==/109951165520524853.jpg?param=300x300'
			},
			{
			    id: 32,
			    title: '32.是想你的声音啊 - 傲七爷',
			    singer: '傲七爷',
			    songUrl: 'http://music.163.com/song/media/outer/url?id=1459950258.mp3',
			    imageUrl: 'http://p1.music.126.net/cIR63lyPGgQ4mAyuOTg8lA==/109951165109878587.jpg?param=300x300'
			},
			{
			    id: 33,
			    title: '33.谪仙（翻自 叶里） - 一颗狼星_许篮心',
			    singer: '一颗狼星_许篮心',
			    songUrl: 'http://music.163.com/song/media/outer/url?id=1444523529.mp3',
			    imageUrl: 'http://p2.music.126.net/keH7XpFlsFQv_QSF1O7FwA==/109951164907937823.jpg?param=300x300'
			},
			{
			    id: 34,
			    title: '34.Love me like you do（翻自 Ellie Goulding） - SWAGGER',
			    singer: 'SWAGGER',
			    songUrl: 'http://music.163.com/song/media/outer/url?id=1469360059.mp3',
			    imageUrl: 'http://p1.music.126.net/bhxEpsb8SNfrT5z8w1rZ_Q==/109951165215630536.jpg?param=300x300'
			},
			{
			    id: 35,
			    title: '35.我有多么爱你（翻自 刘大壮） - jiajia不熬夜',
			    singer: 'jiajia不熬夜',
			    songUrl: 'http://music.163.com/song/media/outer/url?id=1467662607.mp3',
			    imageUrl: 'http://p2.music.126.net/cTuVRLwrbs_jl89gUEY8NA==/109951165193748793.jpg?param=300x300'
			},
			{
			    id: 36,
			    title: '36.来不及爱 来不及痛 来不及 牵住你的手（翻自 刘瑞琦） - BenoM1927,Benom1927',
			    singer: 'BenoM1927,Benom1927',
			    songUrl: 'http://music.163.com/song/media/outer/url?id=1468050081.mp3',
			    imageUrl: 'http://p2.music.126.net/EuCSn9Pe_3kAlxmrRAH3Og==/109951165198869821.jpg?param=300x300'
			},
			{
			    id: 37,
			    title: '37.心如止水 - Ice Paper',
			    singer: 'Ice Paper',
			    songUrl: 'http://music.163.com/song/media/outer/url?id=1349292048.mp3',
			    imageUrl: 'http://p1.music.126.net/MLQl_7poLz2PTON6_JZZRQ==/109951163938219545.jpg?param=300x300'
			},
			{
			    id: 38,
			    title: '38.笑纳 - 花僮',
			    singer: '花僮',
			    songUrl: 'https://sharefs.yun.kugou.com/202012091541/0b647205fd77b698246cb5cd783af34c/G227/M05/04/08/Iw4DAF9EtSyAHni8AEKYmb_KItw819.mp3',
			    imageUrl: 'http://imge.kugou.com/stdmusic/150/20201118/20201118124918412843.png'
			},
			{
			    id: 39,
			    title: '39.爸爸妈妈 - 李荣浩',
			    singer: '李荣浩',
			    songUrl: 'http://music.163.com/song/media/outer/url?id=407450223.mp3',
			    imageUrl: 'http://p2.music.126.net/UH6mbkyWNd9hRocMk3hd6Q==/109951163240596163.jpg?param=300x300'
			},
			{
			    id: 40,
			    title: '40.飘向北方 (Live) - 那吾克热-NW,尤长靖',
			    singer: '那吾克热-NW,尤长靖',
			    songUrl: 'http://music.163.com/song/media/outer/url?id=1308818967.mp3',
			    imageUrl: 'http://p2.music.126.net/D-mpVLLwMrA-hPu0QPYUNQ==/109951163551410648.jpg?param=300x300'
			},
			// 新加歌曲模板选id为9的
        ]
    }
    //根据索引获取歌曲的方法
    getSongByNum(index) {
        return this.songs[index];
    }
}

//真正的构建播放器的类
class PlayerCreator {
    constructor() {
        this.audio = document.querySelector('.music-player__audio') // Audio dom元素, 因为很多api都是需要原生audio调用的，所以不用jq获取
        // this.audio.muted = true; // 控制静音
        this.audio.volume = 0.8;

        //工具
        this.util = new Util();
        this.musics = new Musics(); //歌曲信息
        this.song_index = 0; // 当前播放的歌曲索引
        this.loop_mode = 0; // 1 2
        // 下方歌曲列表容器
        this.song_list = $('.music__list_content');

        this.render_doms = { //切换歌曲时需要渲染的dom组
            title: $('.music__info--title'),
            singer: $('.music__info--singer'),
            image: $('.music-player__image img'),
            blur: $('.music-player__blur')
        }
        this.ban_dom = { //禁音时需要渲染的dom组
            control__btn: $('.control__volume--icon')
        }

        // 时间显示容器
        this.render_time = {
            now: $('.nowTime'),
            total: $('.totalTime')
        }

        // 唱片
        this.disc = {
            image: $('.music-player__image'),
            pointer: $('.music-player__pointer')
        };
        //播放器初始化
        this.init();
    }
    //初始化函数
    init() {
        this.renderSongList();
        this.renderSongStyle();
        this.bindEventListener();
    }
    //生成播放列表
    renderSongList() {
        let _str = '';
        this.musics.songs.forEach((song, i) => {
            _str += `<li class="music__list__item">${song.title}</li>`
        });
        this.song_list.html(_str);
    }

    //根据歌曲去渲染视图
    renderSongStyle() {
        let {
            title,
            singer,
            songUrl,
            imageUrl
        } = this.musics.getSongByNum(this.song_index);
        this.audio.src = songUrl;
        this.render_doms.title.html(title);
        this.render_doms.singer.html(singer);
        this.render_doms.image.prop('src', imageUrl);
        this.render_doms.blur.css('background-image', 'url("' + imageUrl + '")');

        //切换列表中的item的类名 play
        this.song_list.find('.music__list__item').eq(this.song_index).addClass('play').siblings().removeClass('play');
    }
    //绑定各种事件
    bindEventListener() {
        //播放按钮
        this.$play = new Btns('.player-control__btn--play', {
            click: this.handlePlayAndPause.bind(this)
        });
        //上一首
        this.$prev = new Btns('.player-control__btn--prev', {
            click: this.changeSong.bind(this, 'prev')
        });
        //下一首
        this.$next = new Btns('.player-control__btn--next', {
            click: this.changeSong.bind(this, 'next')
        });
        //循环模式
        this.$mode = new Btns('.player-control__btn--mode', {
            click: this.changePlayMode.bind(this)
        });
        //禁音
        this.$ban = new Btns('.control__volume--icon', {
            click: this.banNotes.bind(this)
        })
        //列表点击
        this.song_list.on('click', 'li', (e) => {
            let index = $(e.target).index();
            this.changeSong(index);
        })

        //音量控制 audio标签音量 vlouem 属性控制0-1

        new Progress('.control__volume--progress', {
            min: 0,
            max: 1,
            value: this.audio.volume,
            handler: (value) => { //更改进度时
                this.audio.volume = value;
            }
        })


        //歌曲进度 this.audio.duration

        //可以播放的时候触发（歌曲的基本信息都已经获取到了）
        this.audio.oncanplay = () => {
            //避免重复实例化
            if (this.progress) {
                this.progress.max = this.audio.duration; //切换歌曲后更新时长
                this.render_time.total.html(this.util.formatTime(this.audio.duration));
                return false;
            };
            this.progress = new Progress('.player__song--progress', {
                min: 0,
                max: this.audio.duration,
                value: 0,
                handler: (value) => {
                    this.audio.currentTime = value;
                }
            })
            //调整总时长
            this.render_time.total.html(this.util.formatTime(this.audio.duration));
        }

        //会在播放的时候持续触发
        this.audio.ontimeupdate = () => {
            this.progress.setValue(this.audio.currentTime);
            //调整当前时长
            this.render_time.now.html(this.util.formatTime(this.audio.currentTime));
        }

        //当歌曲播放完成的时候
        this.audio.onended = () => {
            this.changeSong('next');
            //播放完，换歌后，重新播放
            this.audio.play();
        }

    }

    //播放暂停控制
    handlePlayAndPause() {
        let _o_i = this.$play.$el.find('i');
        //this.audio.pauseed值为true 说明目前是不播放
        if (this.audio.paused) { //现在是暂停的 要播放
            this.audio.play();
            _o_i.removeClass('icon-play').addClass('icon-pause');
            this.disc.image.addClass('play');
            this.disc.pointer.addClass('play')
        } else {
            this.audio.pause();
            _o_i.addClass('icon-play').removeClass('icon-pause');
            this.disc.image.removeClass('play');
            this.disc.pointer.removeClass('play');
        }
    }

    //更改循环模式
    changePlayMode() {
        this.loop_mode++;
        if (this.loop_mode > 2) this.loop_mode = 0;
        this.renderPlayMode();
    }
    //更改按钮样式
    renderPlayMode() {
        let _classess = ['loop', 'random', 'single'];
        let _o_i = this.$mode.$el.find('i');
        //prop 改一些标签的自有属性 attr改一些标签的自定义属性
        _o_i.prop('class', 'iconfont icon-' + _classess[this.loop_mode])
    }

    //更改歌曲索引
    changeSongIndex(type) {
        if (typeof type === 'number') {
            this.song_index = type;
        } else {
            if (this.loop_mode === 0) {
                //列表循环
                this.song_index += type === 'next' ? 1 : -1;
                if (this.song_index > this.musics.songs.length - 1) this.song_index = 0;
                if (this.song_index < 0) this.song_index = this.musics.songs.length - 1;
            } else if (this.loop_mode === 1) {
                //随机播放
                let _length = this.musics.songs.length;
                let _random = Math.floor(Math.random() * _length);
                for (let i = 0; i < 10000; i++) { //随机的数为本身则继续随机
                    if (this.song_index == _random) {
                        _random = Math.floor(Math.random() * _length);
                    } else {
                        this.song_index = _random;
                        break;
                    }
                }
            } else if (this.loop_mode === 2) {
                this.song_index = this.song_index;
            }
        }
    }
    //歌曲时长
    songTime() {
        let totalMinute = parseInt(this.audio.duration / 60) < 10 ? "0" + parseInt(this.audio.duration / 60) : parseInt(this.audio.duration / 60);
        let totalSecond = parseInt(this.audio.duration % 60) < 10 ? "0" + parseInt(this.audio.duration % 60) : parseInt(this.audio.duration % 60);
        $('.totalTime').text(totalMinute + ':' + totalSecond);
    }
    //切换歌曲
    changeSong(type) {
        //更改索引
        this.changeSongIndex(type);
        //记录切歌前的状态
        let _is_pause = this.audio.paused;
        //切歌后更改视图显示
        this.renderSongStyle();
        //如果切歌前是在播放，就继续播放
        if (!_is_pause) this.audio.play();
    }
    //禁音
    banNotes() {
        let _o_i = this.$ban.$el.find("i");
        if (this.audio.muted == true) { //如果禁音则开启
            this.audio.muted = false;
            _o_i.removeClass('icon-muted').addClass('icon-volume');
        } else {
            this.audio.muted = true;
            _o_i.removeClass('icon-volume').addClass('icon-muted');
        }
    }
}

//进度条
class Progress {
    constructor(selector, options) {
        $.extend(this, options);
        ///给this挂载传入的参数
        this.$el = $(selector);
        this.width = this.$el.width();
        this.init();
    }

    //进度条初始化
    init() {
        this.renderBackAndPointer();
        //this.bindEvents();
        this.drag();
        this.value;
        this.changeDOMStyle(this.width * this.value);
    }
    //为进度条渲染back和pointer
    renderBackAndPointer() {
        this.$back = $('<div class="back">');
        this.$pointer = $('<div class="pointer">');

        this.$el.append(this.$back);
        this.$el.append(this.$pointer);
    }

    setValue(value) { //主动调用，传入value值，设置进度条样式
        let _distance = this.width * value / (this.max - this.min);
        this.changeDOMStyle(_distance);
    }

    drag() {
        let ele = this.$pointer;
        let father = this.$el;
        let flag = false; //鼠标是否点击
        ele.mousedown((e) => {
            flag = true;
            let mousePos = {
                x: e.offsetX
            }
            $(document).mousemove((e) => {
                if (flag === true) {
                    let _left = e.clientX - father.offset().left - mousePos.x;
                    let _distance = Math.max(0, Math.min(_left, father.outerWidth(false) - ele.outerWidth(false)))
                    let _ratio = _distance / father.outerWidth(false);
                    let _value = _ratio * (this.max - this.min); //当前的音量值
                    this.changeDOMStyle(_distance);
                    this.handler(_value); //更改进度之后，执行回调
                }
            })
        })
        $(document).mouseup(() => {
            flag = false;
        })

    }

    bindEvents() { //鼠标点击时更改
        this.$el.click((e) => {
            let _x = e.offsetX; //鼠标距离元素左边的距离
            let _ratio = _x / this.width;
            let _value = _ratio * (this.max - this.min); //当前的音量值
            this.changeDOMStyle(_x);
            this.handler(_value); //更改进度之后，执行回调
        })
    }
    //更改pointer和back
    changeDOMStyle(distance) {
        this.$back.width(distance + 7 == 7 ? 0 : distance + 7);//进度为0时将进度条背景改为0否则加上进度按钮的长度
        this.$pointer.css('left', distance + 'px');
    }
}


//按钮类 
class Btns {
    constructor(selector, handlers) {
        this.$el = $(selector); //元素
        this.bindEvents(handlers);
    }
    bindEvents(handlers) { //绑定事件
        for (const event in handlers) {
            //使用值的时候保证键值对在对象中是存在的
            if (handlers.hasOwnProperty(event)) {
                this.$el.on(event, handlers[event]);
            }
        }
    }
}
new Player();