$('.recommended__box').on('click',function(ev) {
    var dataId = $(this).attr('data-switch');
    console.log(dataId);

    // This switches the song by dataId
    ap.list.switch(dataId);

    ap.play();
    $('#aplayer').addClass('showPlayer');
    $('.playerIcon').addClass('showIcon');
})

$('.playerIcon').on('click',function(ev) {
    ap.pause();
    $('#aplayer').removeClass('showPlayer');
    $('.playerIcon').removeClass('showIcon');
})

const ap = new APlayer({
container: document.getElementById('aplayer'),
listFolded: true,
lrcType: 1,
audio: [
{
    name: 'Baby',
    artist: 'Justin Bieber',
    url: 'songs/Baby.mp3',
    cover: 'img/justin.jpg',
    lrc: '[00:02.34]ah\n[00:06.21]ah\n[00:09.71]h aa\n[00:14.37]You know you love me\n[00:15.98]I know you care\n[00:17.70]Just shout whenever\n[00:19.44]And ill be there\n[00:21.38]You are my love you are my heart\n[00:24.98]And we will never ever ever be apart\n[00:29.05]Are we an item\n[00:30.68]Girl quit playin\n[00:32.72]We are just friends\n[00:34.47]What are you sayin\n[00:36.31]Said theres another and looked right in my eyes\n[00:39.85]My first love broke my heart for the first time\n[00:43.21]And I was like\n[00:44.17]baby baby baby\n[00:47.44]Like baby baby baby noo\n[00:51.11]Like baby baby baby\n[00:55.05]I thought You had always be mine mine\n[00:58.93]Babybaby baby ooh\n[01:02.54]Like baby baby baby noo\n[01:05.91]Like baby baby baby\n[01:10.00]I thought You had always be mine mine\n[01:13.37]Oh for you I would have done whatever\n[01:16.97]And I just cant believe we aint together\n[01:20.54]And I want to play it cool\n[01:22.72]but im loosing you\n[01:24.37]Ill buy you anything\n[01:26.15]ill buy you any ring\n[01:27.91]And I mean please say\n[01:29.97]baby fix me\n[01:31.70]And just shake me till you wake me from this bad dream\n[01:35.61]Im goin down down down down\n[01:39.20]And I just cant believe my first love wont be around\n[01:42.81]And im like baby baby baby\n[01:46.47]Like baby baby baby noo\n[01:50.14]Like baby baby baby\n[01:54.12]I thought You had always be mine mine\n[01:58.01]Baby baby baby ooh\n[02:01.31]Like baby baby baby noo\n[02:05.01]Like baby baby baby\n[02:08.98]I thought You had always be mine mine\n[02:12.61]LUDA\n[02:13.47]When I was 13 I had my first love\n[02:16.75]There was nobody that compared to my baby and\n[02:19.05]nobody came between us or could ever come above\n[02:21.37]She had me goin crazy oh I was star struck She woke me up\n[02:25.02]daily don′t need no starbucks She made my heart pound\n[02:29.71]and skip a beat when I see her in the street\n[02:32.53]and At school on the playground\n[02:34.30]but I really wanna see her on the weekend She know she\n[02:37.45]got me dazing cause she was so amazin And now my\n[02:40.07]heart is breakin but I keep on sayin\n[02:42.44]Baby baby baby ooh\n[02:45.61]Like baby baby baby noo\n[02:49.28]Like baby baby baby\n[02:53.28]Thought You had always be mine mine\n[02:57.08]Baby baby baby ooh\n[03:00.35]Like baby baby baby noo\n[03:04.11]Like baby baby baby\n[03:08.00]Thought You had always be mine mine\n[03:11.34]Im gone\n[03:14.85]Repeat 3x Now Im all gone\n[03:23.57]Gone. gone\n[03:25.64]Im gone\n'
},
{
    name: 'Perfect',
    artist: 'Ed Sheeran',
    url: 'songs/Perfect.mp3',
    cover: 'img/ed-sheeran-perfect.jpg'
},
{
    name: 'Blank Space',
    artist: 'Taylor Swift',
    url: 'songs/Blank Space.mp3',
    cover: 'img/taylor-swift.jpg'
},
{
    name: "It Ain't Me",
    artist: 'Selena Gomez',
    url: 'songs/It Aint Me.mp3',
    cover: 'img/it-aint-me.jpg'
},
{
    name: 'Love Me Like You do',
    artist: 'Ellie Golding',
    url: 'songs/Love Me Like You Do.mp3',
    cover: 'img/love_me_like_you_do.jpg'
},
]
});