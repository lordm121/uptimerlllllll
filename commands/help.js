var _0xe7ee = [
  "\x64\x69\x73\x63\x6F\x72\x64\x2E\x6A\x73",
  "\x71\x75\x69\x63\x6B\x2E\x64\x62",
  "\x66\x73",
  "\x6A\x73\x2D\x79\x61\x6D\x6C",
  "\x2E\x2F\x63\x6F\x6E\x66\x69\x67\x2E\x79\x6D\x6C",
  "\x72\x65\x61\x64\x46\x69\x6C\x65\x53\x79\x6E\x63",
  "\x6C\x6F\x61\x64",
  "\x65\x78\x70\x6F\x72\x74\x73",
  "\x68\x65\x6C\x70",
  "\x53\x68\x6F\x77\x20\x75\x70\x74\x69\x6D\x65\x64\x20\x67\x6C\x69\x74\x63\x68\x20\x6C\x69\x6E\x73\x6B",
  "\x63\x6F\x6D\x6D\x61\x6E\x64\x73",
  "\x64\x69\x73\x70\x6C\x61\x79\x41\x76\x61\x74\x61\x72\x55\x52\x4C",
  "\x75\x73\x65\x72",
  "\x73\x65\x74\x54\x68\x75\x6D\x62\x6E\x61\x69\x6C",
  "\x75\x73\x65\x72\x6E\x61\x6D\x65",
  "\x73\x65\x74\x46\x6F\x6F\x74\x65\x72",
  "\x47\x52\x45\x45\x4E",
  "\x73\x65\x74\x43\x6F\x6C\x6F\x72",
  "\x47\x6C\x69\x74\x63\x68\x20\x55\x70\x74\x69\x6D\x65\x72",
  "\x73\x65\x74\x44\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E",
  "\x61\x72\x72\x61\x79",
  "\x63\x61\x74\x65\x67\x6F\x72\x79",
  "\x43\x6F\x6D\x6D\x61\x6E\x64\x73",
  "\x6E\x61\x6D\x65",
  "\x70\x75\x73\x68",
  "\x65\x6E\x74\x72\x69\x65\x73",
  "\x60",
  "\x60\x2C\x20\x60",
  "\x6A\x6F\x69\x6E",
  "",
  "\x74\x6F\x55\x70\x70\x65\x72\x43\x61\x73\x65",
  "\x5B",
  "\x6C\x65\x6E\x67\x74\x68",
  "\x5D",
  "\x61\x64\x64\x46\x69\x65\x6C\x64",
  "\x70\x72\x6F\x6A\x65\x63\x74\x73\x5F",
  "\x69\x64",
  "\x61\x75\x74\x68\x6F\x72",
  "\x67\x65\x74",
  "\x74\x6F\x4C\x6F\x77\x65\x72\x43\x61\x73\x65",
  "\x70\x72\x6F\x6A\x65\x63\x74",
  "\x66\x6F\x72\x45\x61\x63\x68",
  "\x47\x6C\x69\x74\x63\x68\x20\x50\x72\x6F\x6A\x65\x63\x74\x73\x20\x5B",
  "\x5D\x20",
  "\x2C\x20",
  "\x73\x65\x6E\x64",
  "\x63\x68\x61\x6E\x6E\x65\x6C"
];
const Discord = require(_0xe7ee[0]);
const db = require(_0xe7ee[1]);
const fs = require(_0xe7ee[2]);
const yaml = require(_0xe7ee[3]);
const { mainprefix, token } = yaml[_0xe7ee[6]](fs[_0xe7ee[5]](_0xe7ee[4]));
module[_0xe7ee[7]] = {
  name: _0xe7ee[8],
  description: _0xe7ee[9],
  run: async (_0x6250x5, _0x6250x6, _0x6250x7) => {
    const _0x6250x8 = await _0x6250x5[_0xe7ee[10]];
    let _0x6250x9 = new Discord.MessageEmbed()
      [_0xe7ee[19]](`${_0xe7ee[18]}`)
      [_0xe7ee[17]](_0xe7ee[16])
      [_0xe7ee[15]](
        _0x6250x5[_0xe7ee[12]][_0xe7ee[14]],
        _0x6250x5[_0xe7ee[12]][_0xe7ee[11]]()
      )
      [_0xe7ee[13]](_0x6250x5[_0xe7ee[12]][_0xe7ee[11]]());
    let _0x6250xa = {};
    for (let _0x6250xb of _0x6250x8[_0xe7ee[20]]()) {
      let _0x6250xc = _0x6250xb[_0xe7ee[21]] || _0xe7ee[22];
      let _0x6250xd = _0x6250xb[_0xe7ee[23]];
      if (!_0x6250xa[_0x6250xc]) {
        _0x6250xa[_0x6250xc] = [];
      }
      _0x6250xa[_0x6250xc][_0xe7ee[24]](_0x6250xd);
    }
    for (const [key, value] of Object[_0xe7ee[25]](_0x6250xa)) {
      let _0x6250xc = key;
      let _0x6250xe =
        _0xe7ee[26] + value[_0xe7ee[28]](_0xe7ee[27]) + _0xe7ee[26];
      _0x6250x9[_0xe7ee[34]](
        `${_0xe7ee[29]}${_0x6250xc[_0xe7ee[30]]()}${_0xe7ee[31]}${
          value[_0xe7ee[32]]
        }${_0xe7ee[33]}`,
        _0x6250xe
      );
    }
    let _0x6250xf = db[_0xe7ee[38]](
      `${_0xe7ee[35]}${_0x6250x6[_0xe7ee[37]][_0xe7ee[36]]}${_0xe7ee[29]}`
    );
    if (_0x6250xf && _0x6250xf[_0xe7ee[32]]) {
      let _0x6250x10 = [];
      _0x6250xf[_0xe7ee[41]](_0x6250x11 => {
        _0x6250x10[_0xe7ee[24]](
          _0xe7ee[26] + _0x6250x11[_0xe7ee[40]][_0xe7ee[39]]() + _0xe7ee[26]
        );
      });
      _0x6250x9[_0xe7ee[34]](
        `${_0xe7ee[42]}${_0x6250xf[_0xe7ee[32]]}${_0xe7ee[43]}`,
        _0x6250x10[_0xe7ee[28]](_0xe7ee[44])
      );
    }
    return _0x6250x6[_0xe7ee[46]][_0xe7ee[45]](_0x6250x9);
  }
};
