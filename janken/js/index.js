$(function(){
  let win = 0;
  let lose = 0;
  const hands = new Map([
    [0, 'グー'],
    [1, 'チョキ'],
    [2, 'パー']
  ]);

  $('.hands button').on('click', function(){
    let player = Number($(this).val());
    let cpu = Math.floor(Math.random()*3);
    let result;
    if((player-cpu+3) % 3 === 2){
      result = '勝ち';
      win++;
    }else if((player-cpu+3) % 3 === 1){
      result = '負け';
      lose++;
    }else{
      result = '引き分け';
      lose++;
    }
    $('.hand .player-hand').text(hands.get(player));
    $('.hand .cpu-hand').text(hands.get(cpu));
    $('.result').text(result);
    $('.rate .percentage').text(String(Math.round(win/(win+lose)*100)));
  });
});