function solution(k, score) {
    const answer = [];
    const list = [];
    
    for(let i = 0; i < score.length; i++) {
        list.push(score[i]);
        list.sort((a, b) => b - a);
        
        if(i < k) {
            answer.push(list[i]);
        }else {
            answer.push(list[k - 1]);
        }
    }
    
    return answer;
}