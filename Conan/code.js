

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["035428b1-7201-43b1-957e-74b9654992ba","334bad46-6fd0-4be1-a232-b8d2e96dbfae","37175eca-8825-48bd-8335-cde44994b7fe","5fdb7cd0-30bd-46b4-9c38-8ef4154d9ade","1cf04675-115f-48e4-809c-16d1fbc8fc61","6edcf6eb-cfbb-4483-8ca6-5b6488b4eba0","67bc3f2b-30fa-405f-ae4f-110f9f71d628","52701196-43b7-404c-b3c8-faeeb6ee0db6","b24333f2-a61c-4255-aa17-90cc57270398","f2619663-566e-4a60-8221-68b9b5e04f34","00c13dde-119f-40c5-b123-6068a959fd46","fceb3241-e2da-4e59-bb6c-d15ed8134c9c","0367eccb-fcf8-49c6-b87f-1fa68a68ab05","5fce3d4a-fecc-4b8e-970a-d34280224148","6d47427b-15f9-4697-80c6-abddc3791b26","cbde8c3f-031f-450d-bf64-2a41174904a4","108a385c-024b-4ae6-8012-afbebc979bf9","5fb26a94-41f8-4dc3-a1f0-bac6d716e1c6","e42c2eb9-f6db-4f65-a122-2f3cad2a27c8","0ecd3107-33bf-4dad-b565-dfcf33164091","422b6e62-745d-4ec2-a7fc-71ce1d0552ba","ea1d340e-d96b-4e19-ac1b-a3d26d7e978d","aafaf7b1-7ccb-483a-8854-e2dc58f6764b","7b161ef5-095d-473e-80c2-1c06ca79bce0","41fe1228-338f-42a4-835b-378673bf4246","bd373e8e-e483-49ff-ab03-e503664431f0","0d3531ba-425b-4d3b-8def-0db7346ce8d7","2107f8b3-f7a1-4c03-9d3b-0d8713db42b2","c32c0901-f984-466d-b6c9-34f5aa4def17","21feb2c3-ae05-4a07-b8b0-6a491bdccc7f"],"propsByKey":{"035428b1-7201-43b1-957e-74b9654992ba":{"name":"conan.png","sourceUrl":null,"frameSize":{"x":260,"y":260},"frameCount":22,"looping":true,"frameDelay":1,"version":"VeHGuH6RZkZvlnxhnfHHKCR48DssUcks","loadedFromSource":true,"saved":true,"sourceSize":{"x":1300,"y":1300},"rootRelativePath":"assets/035428b1-7201-43b1-957e-74b9654992ba.png"},"334bad46-6fd0-4be1-a232-b8d2e96dbfae":{"name":"mountain-min-min_1_800x400.png_1","sourceUrl":null,"frameSize":{"x":798,"y":251},"frameCount":1,"looping":true,"frameDelay":12,"version":"Kh0_EduigQBC6dIQKDDyfGHX72dwfPA4","loadedFromSource":true,"saved":true,"sourceSize":{"x":798,"y":251},"rootRelativePath":"assets/334bad46-6fd0-4be1-a232-b8d2e96dbfae.png"},"37175eca-8825-48bd-8335-cde44994b7fe":{"name":"truffle.png","sourceUrl":null,"frameSize":{"x":15,"y":25},"frameCount":1,"looping":true,"frameDelay":12,"version":"ZZV78r4OI4bThjIEtDMLrgQmE0W8WDnb","loadedFromSource":true,"saved":true,"sourceSize":{"x":15,"y":25},"rootRelativePath":"assets/37175eca-8825-48bd-8335-cde44994b7fe.png"},"5fdb7cd0-30bd-46b4-9c38-8ef4154d9ade":{"name":"truffle.png_copy_1","sourceUrl":null,"frameSize":{"x":15,"y":25},"frameCount":1,"looping":true,"frameDelay":12,"version":"ZtZjl9eHRKvvCPTVIa5bRcV7bYKmn0Hq","loadedFromSource":true,"saved":true,"sourceSize":{"x":15,"y":25},"rootRelativePath":"assets/5fdb7cd0-30bd-46b4-9c38-8ef4154d9ade.png"},"1cf04675-115f-48e4-809c-16d1fbc8fc61":{"name":"rock.png","sourceUrl":"assets/v3/animations/NmE7cC7OUjcawg728v0DcgpcJqXa43Zz9GvT45U4y3M/1cf04675-115f-48e4-809c-16d1fbc8fc61.png","frameSize":{"x":189,"y":171},"frameCount":1,"looping":true,"frameDelay":4,"version":"ZbgRWG2FeJF6hY2G59WowyUASdv1XGwz","loadedFromSource":true,"saved":true,"sourceSize":{"x":189,"y":171},"rootRelativePath":"assets/v3/animations/NmE7cC7OUjcawg728v0DcgpcJqXa43Zz9GvT45U4y3M/1cf04675-115f-48e4-809c-16d1fbc8fc61.png"},"6edcf6eb-cfbb-4483-8ca6-5b6488b4eba0":{"name":"grass.png_1","sourceUrl":"assets/v3/animations/NmE7cC7OUjcawg728v0DcgpcJqXa43Zz9GvT45U4y3M/6edcf6eb-cfbb-4483-8ca6-5b6488b4eba0.png","frameSize":{"x":391,"y":99},"frameCount":1,"looping":true,"frameDelay":4,"version":"McUXlxyo1ZY4YLilEIemoxSs_2bjhxOr","loadedFromSource":true,"saved":true,"sourceSize":{"x":391,"y":99},"rootRelativePath":"assets/v3/animations/NmE7cC7OUjcawg728v0DcgpcJqXa43Zz9GvT45U4y3M/6edcf6eb-cfbb-4483-8ca6-5b6488b4eba0.png"},"67bc3f2b-30fa-405f-ae4f-110f9f71d628":{"name":"grass2.png","sourceUrl":null,"frameSize":{"x":391,"y":99},"frameCount":1,"looping":true,"frameDelay":12,"version":"gnIFi.fFGBFeAW.2cNuLFVI3vxWenNVN","loadedFromSource":true,"saved":true,"sourceSize":{"x":391,"y":99},"rootRelativePath":"assets/67bc3f2b-30fa-405f-ae4f-110f9f71d628.png"},"52701196-43b7-404c-b3c8-faeeb6ee0db6":{"name":"rock2.png_1","sourceUrl":null,"frameSize":{"x":176,"y":193},"frameCount":1,"looping":true,"frameDelay":12,"version":"GfVDhSS3fDdPnzqxL8S5Y17b6OLOfw.K","loadedFromSource":true,"saved":true,"sourceSize":{"x":176,"y":193},"rootRelativePath":"assets/52701196-43b7-404c-b3c8-faeeb6ee0db6.png"},"b24333f2-a61c-4255-aa17-90cc57270398":{"name":"back_600x500-min.png_1","sourceUrl":"assets/v3/animations/NmE7cC7OUjcawg728v0DcgpcJqXa43Zz9GvT45U4y3M/b24333f2-a61c-4255-aa17-90cc57270398.png","frameSize":{"x":600,"y":500},"frameCount":1,"looping":true,"frameDelay":4,"version":"QkQ9StbajF14TzoOF4sc1LaKxTtegH.9","loadedFromSource":true,"saved":true,"sourceSize":{"x":600,"y":500},"rootRelativePath":"assets/v3/animations/NmE7cC7OUjcawg728v0DcgpcJqXa43Zz9GvT45U4y3M/b24333f2-a61c-4255-aa17-90cc57270398.png"},"f2619663-566e-4a60-8221-68b9b5e04f34":{"name":"rock3.png_1","sourceUrl":null,"frameSize":{"x":193,"y":112},"frameCount":1,"looping":true,"frameDelay":12,"version":"gHfrNxaRNAkPZCxt.BVf5cuTZnXflxZo","loadedFromSource":true,"saved":true,"sourceSize":{"x":193,"y":112},"rootRelativePath":"assets/f2619663-566e-4a60-8221-68b9b5e04f34.png"},"00c13dde-119f-40c5-b123-6068a959fd46":{"name":"rock4.png_1","sourceUrl":null,"frameSize":{"x":174,"y":159},"frameCount":1,"looping":true,"frameDelay":12,"version":"zkxv42S.UEhOecGWwqulsBKYWCAw6tpR","loadedFromSource":true,"saved":true,"sourceSize":{"x":174,"y":159},"rootRelativePath":"assets/00c13dde-119f-40c5-b123-6068a959fd46.png"},"fceb3241-e2da-4e59-bb6c-d15ed8134c9c":{"name":"rock5.png_1","sourceUrl":"assets/v3/animations/NmE7cC7OUjcawg728v0DcgpcJqXa43Zz9GvT45U4y3M/fceb3241-e2da-4e59-bb6c-d15ed8134c9c.png","frameSize":{"x":186,"y":183},"frameCount":1,"looping":true,"frameDelay":4,"version":"hDjFTRiKLwGF68PXI48UqCjjm.Q0wbtC","loadedFromSource":true,"saved":true,"sourceSize":{"x":186,"y":183},"rootRelativePath":"assets/v3/animations/NmE7cC7OUjcawg728v0DcgpcJqXa43Zz9GvT45U4y3M/fceb3241-e2da-4e59-bb6c-d15ed8134c9c.png"},"0367eccb-fcf8-49c6-b87f-1fa68a68ab05":{"name":"mushroom.png_1","sourceUrl":"assets/v3/animations/NmE7cC7OUjcawg728v0DcgpcJqXa43Zz9GvT45U4y3M/0367eccb-fcf8-49c6-b87f-1fa68a68ab05.png","frameSize":{"x":80,"y":81},"frameCount":1,"looping":true,"frameDelay":4,"version":"g3MjFv_S9lBgKVJVKnoTKcn6797aUrs.","loadedFromSource":true,"saved":true,"sourceSize":{"x":80,"y":81},"rootRelativePath":"assets/v3/animations/NmE7cC7OUjcawg728v0DcgpcJqXa43Zz9GvT45U4y3M/0367eccb-fcf8-49c6-b87f-1fa68a68ab05.png"},"5fce3d4a-fecc-4b8e-970a-d34280224148":{"name":"mushroom2.png_1","sourceUrl":"assets/v3/animations/NmE7cC7OUjcawg728v0DcgpcJqXa43Zz9GvT45U4y3M/5fce3d4a-fecc-4b8e-970a-d34280224148.png","frameSize":{"x":118,"y":85},"frameCount":1,"looping":true,"frameDelay":4,"version":"akq4VffCjKShINxnpMu0sftEGlM71BKs","loadedFromSource":true,"saved":true,"sourceSize":{"x":118,"y":85},"rootRelativePath":"assets/v3/animations/NmE7cC7OUjcawg728v0DcgpcJqXa43Zz9GvT45U4y3M/5fce3d4a-fecc-4b8e-970a-d34280224148.png"},"6d47427b-15f9-4697-80c6-abddc3791b26":{"name":"mushroom3.png_1","sourceUrl":"assets/v3/animations/NmE7cC7OUjcawg728v0DcgpcJqXa43Zz9GvT45U4y3M/6d47427b-15f9-4697-80c6-abddc3791b26.png","frameSize":{"x":191,"y":97},"frameCount":1,"looping":true,"frameDelay":4,"version":"S4VKdpEIvMsmme54HC9RGW2tNccOmj1m","loadedFromSource":true,"saved":true,"sourceSize":{"x":191,"y":97},"rootRelativePath":"assets/v3/animations/NmE7cC7OUjcawg728v0DcgpcJqXa43Zz9GvT45U4y3M/6d47427b-15f9-4697-80c6-abddc3791b26.png"},"cbde8c3f-031f-450d-bf64-2a41174904a4":{"name":"mushroom4.png_1","sourceUrl":"assets/v3/animations/NmE7cC7OUjcawg728v0DcgpcJqXa43Zz9GvT45U4y3M/cbde8c3f-031f-450d-bf64-2a41174904a4.png","frameSize":{"x":192,"y":105},"frameCount":1,"looping":true,"frameDelay":4,"version":"Xf2Z.XMgLIxYIJbj50Mek3KYqWitHO37","loadedFromSource":true,"saved":true,"sourceSize":{"x":192,"y":105},"rootRelativePath":"assets/v3/animations/NmE7cC7OUjcawg728v0DcgpcJqXa43Zz9GvT45U4y3M/cbde8c3f-031f-450d-bf64-2a41174904a4.png"},"108a385c-024b-4ae6-8012-afbebc979bf9":{"name":"greenbean.png_1","sourceUrl":null,"frameSize":{"x":105,"y":108},"frameCount":1,"looping":true,"frameDelay":12,"version":"6oxFAHSB22zhSkv16QGC_dHuvALeadaj","loadedFromSource":true,"saved":true,"sourceSize":{"x":105,"y":108},"rootRelativePath":"assets/108a385c-024b-4ae6-8012-afbebc979bf9.png"},"5fb26a94-41f8-4dc3-a1f0-bac6d716e1c6":{"name":"menu-min.png_1","sourceUrl":"assets/v3/animations/NmE7cC7OUjcawg728v0DcgpcJqXa43Zz9GvT45U4y3M/5fb26a94-41f8-4dc3-a1f0-bac6d716e1c6.png","frameSize":{"x":800,"y":800},"frameCount":1,"looping":true,"frameDelay":4,"version":"xgVOTRU4YqHdZcr8YaGwbdCiN5_Gf2AH","loadedFromSource":true,"saved":true,"sourceSize":{"x":800,"y":800},"rootRelativePath":"assets/v3/animations/NmE7cC7OUjcawg728v0DcgpcJqXa43Zz9GvT45U4y3M/5fb26a94-41f8-4dc3-a1f0-bac6d716e1c6.png"},"e42c2eb9-f6db-4f65-a122-2f3cad2a27c8":{"name":"conan heart.png_1","sourceUrl":"assets/v3/animations/NmE7cC7OUjcawg728v0DcgpcJqXa43Zz9GvT45U4y3M/e42c2eb9-f6db-4f65-a122-2f3cad2a27c8.png","frameSize":{"x":122,"y":101},"frameCount":1,"looping":true,"frameDelay":4,"version":"ls8wPgUrNeWq2byZkKLfFb4tvoPt8srn","loadedFromSource":true,"saved":true,"sourceSize":{"x":122,"y":101},"rootRelativePath":"assets/v3/animations/NmE7cC7OUjcawg728v0DcgpcJqXa43Zz9GvT45U4y3M/e42c2eb9-f6db-4f65-a122-2f3cad2a27c8.png"},"0ecd3107-33bf-4dad-b565-dfcf33164091":{"name":"doorlow.png_1","sourceUrl":null,"frameSize":{"x":343,"y":355},"frameCount":1,"looping":true,"frameDelay":12,"version":"d1IvnZnJi8961nOJjJSoviH5ktZ0evct","loadedFromSource":true,"saved":true,"sourceSize":{"x":343,"y":355},"rootRelativePath":"assets/0ecd3107-33bf-4dad-b565-dfcf33164091.png"},"422b6e62-745d-4ec2-a7fc-71ce1d0552ba":{"name":"forestback.png","sourceUrl":null,"frameSize":{"x":800,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"d8kDDAf4YUtO1clWr5XDFzJkh6LMkDv_","loadedFromSource":true,"saved":true,"sourceSize":{"x":800,"y":400},"rootRelativePath":"assets/422b6e62-745d-4ec2-a7fc-71ce1d0552ba.png"},"ea1d340e-d96b-4e19-ac1b-a3d26d7e978d":{"name":"forestfore.png","sourceUrl":null,"frameSize":{"x":800,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"mXW1ZOvZ6uMPwoO0NGaHSoQslhgh2u0x","loadedFromSource":true,"saved":true,"sourceSize":{"x":800,"y":400},"rootRelativePath":"assets/ea1d340e-d96b-4e19-ac1b-a3d26d7e978d.png"},"aafaf7b1-7ccb-483a-8854-e2dc58f6764b":{"name":"chilie.png_1","sourceUrl":null,"frameSize":{"x":51,"y":37},"frameCount":1,"looping":true,"frameDelay":12,"version":"3TqQEQ0GnDifnFguGh7anT9h57f5WV8p","loadedFromSource":true,"saved":true,"sourceSize":{"x":51,"y":37},"rootRelativePath":"assets/aafaf7b1-7ccb-483a-8854-e2dc58f6764b.png"},"7b161ef5-095d-473e-80c2-1c06ca79bce0":{"name":"menu.png_1","sourceUrl":"assets/v3/animations/NmE7cC7OUjcawg728v0DcgpcJqXa43Zz9GvT45U4y3M/7b161ef5-095d-473e-80c2-1c06ca79bce0.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":4,"version":"EKeTxM1VHU_qNI8PkmyBA1ZcqxQg_9IE","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/v3/animations/NmE7cC7OUjcawg728v0DcgpcJqXa43Zz9GvT45U4y3M/7b161ef5-095d-473e-80c2-1c06ca79bce0.png"},"41fe1228-338f-42a4-835b-378673bf4246":{"name":"conan.png_1","sourceUrl":"assets/v3/animations/mo9moLyvRphEdQ_s_93_rUUkPlX5Qi4-YMoNOFlAspo/41fe1228-338f-42a4-835b-378673bf4246.png","frameSize":{"x":253,"y":165},"frameCount":1,"looping":true,"frameDelay":4,"version":"FoceCTH5vOabFBIZT7WbvxZOSSkS.Efy","loadedFromSource":true,"saved":true,"sourceSize":{"x":253,"y":165},"rootRelativePath":"assets/v3/animations/mo9moLyvRphEdQ_s_93_rUUkPlX5Qi4-YMoNOFlAspo/41fe1228-338f-42a4-835b-378673bf4246.png"},"bd373e8e-e483-49ff-ab03-e503664431f0":{"name":"conan the duology-min.png_1","sourceUrl":"assets/v3/animations/mo9moLyvRphEdQ_s_93_rUUkPlX5Qi4-YMoNOFlAspo/bd373e8e-e483-49ff-ab03-e503664431f0.png","frameSize":{"x":800,"y":800},"frameCount":1,"looping":true,"frameDelay":4,"version":"n3FSZIizBkYrpqWR6CzJf4hgx3f4WSRd","loadedFromSource":true,"saved":true,"sourceSize":{"x":800,"y":800},"rootRelativePath":"assets/v3/animations/mo9moLyvRphEdQ_s_93_rUUkPlX5Qi4-YMoNOFlAspo/bd373e8e-e483-49ff-ab03-e503664431f0.png"},"0d3531ba-425b-4d3b-8def-0db7346ce8d7":{"name":"blank","sourceUrl":"assets/api/v1/animation-library/mUlvnlbeZ5GHYr_Lb4NIuMwPs7kGxHWz/category_backgrounds/blank.png","frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":4,"version":"mUlvnlbeZ5GHYr_Lb4NIuMwPs7kGxHWz","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/api/v1/animation-library/mUlvnlbeZ5GHYr_Lb4NIuMwPs7kGxHWz/category_backgrounds/blank.png"},"2107f8b3-f7a1-4c03-9d3b-0d8713db42b2":{"name":"blank_2","sourceUrl":"assets/api/v1/animation-library/mUlvnlbeZ5GHYr_Lb4NIuMwPs7kGxHWz/category_backgrounds/blank.png","frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":4,"version":"mUlvnlbeZ5GHYr_Lb4NIuMwPs7kGxHWz","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/api/v1/animation-library/mUlvnlbeZ5GHYr_Lb4NIuMwPs7kGxHWz/category_backgrounds/blank.png"},"c32c0901-f984-466d-b6c9-34f5aa4def17":{"name":"funk","sourceUrl":null,"frameSize":{"x":500,"y":500},"frameCount":23,"looping":true,"frameDelay":1,"version":"_zGPW7uMhaf9GVeNlO8qBPHt3MJlHYtu","loadedFromSource":true,"saved":true,"sourceSize":{"x":2500,"y":2500},"rootRelativePath":"assets/c32c0901-f984-466d-b6c9-34f5aa4def17.png"},"21feb2c3-ae05-4a07-b8b0-6a491bdccc7f":{"name":"how to play.png_1","sourceUrl":"assets/v3/animations/mo9moLyvRphEdQ_s_93_rUUkPlX5Qi4-YMoNOFlAspo/21feb2c3-ae05-4a07-b8b0-6a491bdccc7f.png","frameSize":{"x":800,"y":800},"frameCount":1,"looping":true,"frameDelay":4,"version":"Lw1AZ1i_161mnsoxb3KRDHqlWvSt0VFh","loadedFromSource":true,"saved":true,"sourceSize":{"x":800,"y":800},"rootRelativePath":"assets/v3/animations/mo9moLyvRphEdQ_s_93_rUUkPlX5Qi4-YMoNOFlAspo/21feb2c3-ae05-4a07-b8b0-6a491bdccc7f.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

createEdgeSprites();
var background = createSprite(200, 200);
background.setAnimation("back_600x500-min.png_1");
var mountain = createSprite(200, 275);
mountain.setAnimation("mountain-min-min_1_800x400.png_1");
var forestback = createSprite(200, 200);
forestback.setAnimation("forestback.png");
forestback.visible = false;
var forestfore = createSprite(200, 200);
forestfore.setAnimation("forestfore.png");
forestfore.visible = false;
var forestfore2 = createSprite(700, 200);
forestfore2.setAnimation("forestfore.png");
forestfore2.visible = false;
var forestfore3 = createSprite(1100, 200);
forestfore3.setAnimation("forestfore.png");
forestfore3.visible = false;
var conan = createSprite(100, 300);
conan.setAnimation("conan.png");
conan.setCollider("rectangle", 1, 7, 180, 120);
conan.scale = 0.5;
var truffleUI = createSprite(25, 30);
truffleUI.setAnimation("truffle.png");
truffleUI.scale = 1.3;
var truffle = createSprite(430, 200);
truffle.setAnimation("truffle.png");
var grass = createSprite(200, 390);
grass.setAnimation("grass.png_1");
grass.scale = 0.3;
var grass2 = createSprite(370, 390);
grass2.setAnimation("grass2.png");
grass2.scale = 0.3;
var mushroom = createSprite(160, 390);
mushroom.setAnimation("mushroom.png_1");
mushroom.scale = 0.4;
var greenbean = createSprite(200, 380);
greenbean.setAnimation("greenbean.png_1");
greenbean.scale = 0.4;
greenbean.visible = false;
var menu = createSprite(200, 200);
menu.setAnimation("conan the duology-min.png_1");
menu.scale = 0.5;
var heartUI = createSprite(320, 30);
heartUI.setAnimation("conan heart.png_1");
heartUI.visible = false;
heartUI.scale = 0.3;
var door = createSprite(600, 313);
door.setAnimation("doorlow.png_1");
door.scale = 0.5;
door.visible = false;
door.setCollider("rectangle", 1, 1, 80, 250);
var chilie = createSprite(500, 200);
chilie.setAnimation("chilie.png_1");
chilie.visible = true;
chilie.scale = 0.6;
var rock = createSprite(580, 380);
rock.setAnimation("rock.png");
rock.setCollider("rectangle", -20, 1, 90, 80);
rock.scale = 0.35;
var counter = 0;
var orgcounter = 0;
var greenbeanInput = false;
var greenbeanTimer = 100;
var Iframes = false;
var health = 5;
var levelTimer = 800;
var forest = false;
var SpeedMultiplier = 0;
var conanorg2 = false;

var howtoplay = createSprite(200, 200);
howtoplay.setAnimation("how to play.png_1");
howtoplay.scale = 0.5;
var conanrun = createSprite(95, 350);
conanrun.setAnimation("blank");
conanrun.width = 200;
conanrun.visible = false;
var conanorgmenu = createSprite(310, 350);
conanorgmenu.setAnimation("blank_2");
conanorgmenu.width = 200;
conanorgmenu.visible = false;


var funk = createSprite(200, 200);
funk.setAnimation("funk");
funk.visible = false;
var conanorg = createSprite(200, 200);
conanorg.setAnimation("conan.png_1");
conanorg.setCollider("rectangle", 0, 10, 240, 130, 0);
conanorg.visible = false;
conanorg.scale = 0.5;
var counter = 0;
var truffleorg = createSprite(randomNumber(20, 380), randomNumber(20, 380));
truffleorg.visible = false;
truffleorg.setAnimation("truffle.png_copy_1");

function conanorggame() {
  mountain.visible = false;
  rock.visible = false;
  mushroom.visible = false;
  greenbean.visible = false;
  grass.visible = false;
  grass2.visible = false;
  door.visible = false;
  forestback.visible = false;
  forestfore.visible = false;
  forestfore2.visible = false;
  chilie.visible = false;
  conan.visible = false;
  chilie.visible = false;
  background.visible = false;
  mountain.visible = false;
  truffle.visible = false;
  truffleUI.visible = false;
  if (orgcounter == 10) {
    orgcounter = orgcounter + 1;
    stopSound("assets/low-quality-get-lucky-by-daft-punk.mp3");
    playSound("assets/I-want-some-cheeseburgers-just-to-eat.mp3", true);
  }
  if (orgcounter == -1) {
    playSound("assets/low-quality-get-lucky-by-daft-punk.mp3", true);
    orgcounter = 0;
  }
  conanorg.visible = true;
  truffleorg.visible = true;
  funk.visible = true;
  //truffles
  if (conanorg.isTouching(truffleorg)) {
    truffleorg.x = randomNumber(1, 400);
    truffleorg.y = randomNumber(1, 400);
    orgcounter = orgcounter + 1;
  }
  //controls
  if (keyDown("right") || keyDown("d")) {
    conanorg.velocityX = 2;
  }
  if (keyDown("left") || keyDown("a")) {
    conanorg.velocityX = -2;
  }
  if (keyDown("space")) {
    conanorg.pointTo(World.mouseX, World.mouseY);
  }
  if (keyDown("up") || keyDown("w")) {
    conanorg.velocityY = -2;
  }
  if (keyDown("down") || keyDown("s")) {
    conanorg.velocityY = 2;
  }
  if (conanorg.bounceOff(leftEdge)) {
    counter = counter + 0;
  }
  if (conanorg.bounceOff(rightEdge)) {
    counter = counter + 0;
  }
  if (conanorg.bounceOff(topEdge)) {
    counter = counter + 0;
  }
  if (conanorg.bounceOff(bottomEdge)) {
    counter = counter + 0;
  }
  fill("black");
  if (counter >= 10 && 0 == counter % 10) {
    fill("yellow");
  }
  //secret
  if (orgcounter >= 10) {
    conanorg.setAnimation("truffle.png_copy_1");
    conanorg.scale = 2;
    conanorg.setCollider("rectangle", 0, 0);
    truffleorg.setAnimation("conan.png_1");
    truffleorg.scale = 0.5;
    truffleorg.setCollider("rectangle", 0, 10, 240, 130, 0);
  }
  //counter
  
}
function draw() {
  showMobileControls(true, true, false, true);
  //If the counter is divisable by 40 give heart
  if (counter >= 40 && 0 == counter % 40) {
    counter = counter + 1;
    health = health + 1;
  }
  //Spawning the door
  if (levelTimer <= 0) {
    Iframes = true;
    door.visible = true;
  } else {
    door.visible = false;
  }
  //Switching levels
  if (conan.isTouching(door) && !forest) {
    door.x = -100;
    forest = true;
    mountainlevel();
  }
  if (conan.isTouching(door) && forest) {
    door.x = -100;
    forest = false;
    mountainlevel();
  }
  //Switching levels End
  //Greenbean level
  if (greenbeanInput) {
    greenbeanTimer = greenbeanTimer - 0.5;
    Iframes = true;
  }
  if (greenbeanTimer <= 0) {
    greenbeanTimer = 100;
    conan.x = 100;
    greenbeanInput = false;
    greenbean.visible = false;
    Iframes = true;
    mountainlevel();
  }
  if (greenbeanInput) {
    conan.velocityY = 0;
    conan.velocityX = 0;
  } else {
    conan.velocityY = conan.velocityY + 1;
    conan.velocityX = 0;
  }
  //Greenbean level End
  //Moving Layer
  grass2.velocityX = -3 + SpeedMultiplier;
  grass.velocityX = -3 + SpeedMultiplier;
  rock.velocityX = -7 + SpeedMultiplier;
  truffle.velocityX = -3.8 + SpeedMultiplier;
  mushroom.velocityX = -3 + SpeedMultiplier;
  greenbean.velocityX = -5 + SpeedMultiplier;
  forestfore.velocityX = -0.5 + SpeedMultiplier;
  forestfore2.velocityX = -0.5 + SpeedMultiplier;
  forestfore3.velocityX = -0.5 + SpeedMultiplier;
  chilie.velocityX = -5 + SpeedMultiplier;
  if (door.visible) {
    door.velocityX = -2;
    rock.visible = false;
    greenbean.visible = false;
    Iframes = true;
  } else {
    door.velocityX = 0;
    rock.visible = true;
  }
  //Moving Layer End
  //Reset Moving Layer
  if ((chilie.x) <= -100) {
    chilie.x = randomNumber(600, 750);
    chilie.y = randomNumber(160, 380);
  }
  if ((door.x) <= -200) {
    levelTimer = 500;
    door.visible = false;
  }
  if (!door.visible) {
    door.x = 600;
  }
  if ((forestfore.x) <= -400) {
    forestfore.x = 900;
  }
  if ((forestfore2.x) <= -400) {
    forestfore2.x = 900;
  }
  if ((forestfore3.x) <= -400) {
    forestfore3.x = 900;
  }
  if (grass.x < -50) {
    grass.x = randomNumber(480, 600);
  }
  if (grass2.x < -50) {
    grass2.x = randomNumber(480, 600);
  }
  if ((rock.x) <= -30) {
    conan.tint = "clear";
    Iframes = false;
    rock.x = randomNumber(410, 480);
    rockgen();
  }
  if ((greenbean.x) <= -30) {
    greenbean.x = randomNumber(470, 590);
    greenbeangen();
  }
  if ((truffle.x) <= -5) {
    truffle.x = 410;
    truffle.y = randomNumber(150, 380);
  }
  if ((mushroom.x) <= -20) {
    mushroom.x = randomNumber(480, 700);
    mushroomgen();
  }
  //Reset Moving Layer End
  //Input
  if (conan.y >= 350 && keyDown("space")) {
    playSound("assets/conanJump.mp3", false);
    conan.velocityY = -20;
  }
  if (keyDown("down") || mouseDown("leftButton")) {
    conan.velocityY = conan.velocityY + 10;
  }
  //Greenbean
  if (keyDown("up") && greenbeanInput) {
    conan.velocityY = -4.5;
  }
  if (keyDown("down") && greenbeanInput) {
    conan.velocityY = 4.5;
  }
  if (keyDown("right") && greenbeanInput) {
    conan.velocityX = 4.5;
  }
  if (keyDown("left") && greenbeanInput) {
    conan.velocityX = -4.5;
  }
  //Input End
  //Conan collecting/colliding things
  if (conan.isTouching(rock) && !Iframes) {
    health = health - 1;
    Iframes = true;
    conan.tint = "#ff5655";
  }
  if (conan.isTouching(truffle)) {
    truffle.x = -10;
    counter = counter + 1;
  }
  if (conan.isTouching(chilie) && chilie.visible) {
    chilie.x = -30;
    SpeedMultiplier = SpeedMultiplier + -0.2;
  }
  if (conan.isTouching(greenbean) && greenbean.visible) {
    conan.setSpeedAndDirection(-90, 90);
    greenbean.x = -20;
  }
  if ((conan.y) <= -40) {
    greenbeanInput = true;
    conan.x = 200;
    conan.y = 200;
  }
  if (greenbeanInput) {
    greenbeanlevel();
  }
  if (health == 0) {
    menu.visible = true;
  }
  conan.collide(bottomEdge);
  //Conan collecting/colliding things
  //Menu
  if (mousePressedOver(conanrun) && (menu.visible && !howtoplay.visible)) {
    menu.visible = false;
    rock.x = 500;
    health = 5;
    counter = 0;
    SpeedMultiplier = 0;
    heartUI.visible = true;
    forest = false;
    mountainlevel();
  }
  //if (mousePressedOver(conanrun) && menu.visible) {
    
  //}
  if (keyWentDown("space") && howtoplay.visible) {
    howtoplay.visible = false;
    conanrun.visible = true;
    conanorgmenu.visible = true;
  }
  if (mousePressedOver(conanorgmenu) && (menu.visible && !howtoplay.visible)) {
    menu.visible = true;
    orgcounter = -1;
    conanorg2 = true;
  }
  if (conanorg2) {
    menu.x = -1000;
    conanorggame();
    heartUI.visible = false;
  }
  if (menu.visible) {
    levelTimer = 800;
    rock.visible = false;
    door.visible = false;
    heartUI.visible = false;
    chilie.visible = false;
  }
  drawSprites();
  if (conanorg2) {
    fill("black");
    textSize(50);
    text(orgcounter, 50, 50);
  }
  if (!menu.visible && !conanorg2) {
    levelTimer = levelTimer - 0.5;
    chilie.visible = true;
    fill("black");
    textSize(50);
    text(counter, 50, 50);
    text(health, 350, 50);
  }
  //Menu End
}
function greenbeangen() {
  greenbean.visible = false;
  var greenbeanrng = randomNumber(1, 45);
  if (greenbeanInput) {
    greenbean.visible = false;
  }
  if (greenbeanrng == 1) {
    greenbean.visible = true;
  }
  if (greenbeanInput) {
    greenbean.visible = false;
  }
}
function greenbeanlevel() {
  mountain.visible = false;
  rock.visible = false;
  mushroom.visible = false;
  greenbean.visible = false;
  grass.visible = false;
  grass2.visible = false;
  door.visible = false;
  forestback.visible = false;
  forestfore.visible = false;
  forestfore2.visible = false;
  forestfore3.visible = false;
  chilie.visible = false;
}
function mushroomgen() {
  var mushroomrng = randomNumber(1, 4);
  if (mushroomrng == 1) {
    mushroom.setAnimation("mushroom.png_1");
  }
  if (mushroomrng == 2) {
    mushroom.setAnimation("mushroom2.png_1");
  }
  if (mushroomrng == 3) {
    mushroom.setAnimation("mushroom3.png_1");
  }
  if (mushroomrng == 4) {
    mushroom.setAnimation("mushroom4.png_1");
  }
}
function rockgen() {
  var rockrng = randomNumber(1, 5);
  if (rockrng == 1) {
    rock.setAnimation("rock2.png_1");
  }
  if (rockrng == 2) {
    rock.setAnimation("rock.png");
  }
  if (rockrng == 3) {
    rock.setAnimation("rock3.png_1");
  }
  if (rockrng == 4) {
    rock.setAnimation("rock4.png_1");
  }
  if (rockrng == 5) {
    rock.setAnimation("rock5.png_1");
  }
}
function mountainlevel() {
  if (!forest) {
    mountain.visible = true;
    rock.visible = true;
    mushroom.visible = true;
    greenbean.visible = false;
    grass.visible = true;
    grass2.visible = true;
    forestback.visible = false;
    forestfore.visible = false;
    forestfore2.visible = false;
    forestfore3.visible = false;
  } else {
    mountain.visible = false;
    rock.visible = true;
    mushroom.visible = true;
    greenbean.visible = false;
    grass.visible = true;
    grass2.visible = true;
    forestback.visible = true;
    forestfore.visible = true;
    forestfore2.visible = true;
    forestfore3.visible = true;
  }
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
