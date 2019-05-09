const accentMap = {
    'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u'
  };
  
  export default function accentFold(s) {
    if (!s) { return ''; }
    let ret = '';
    for (let i = 0; i < s.length; i++) {
      ret += accentMap[s.charAt(i)] || s.charAt(i);
    }
    return ret;
  }
  