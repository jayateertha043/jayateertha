import 'package:flutter/material.dart';
import 'package:jayateertha/utils/api.dart';
import 'package:velocity_x/velocity_x.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';

dynamic showCustomDrawer(BuildContext context) {
  return showModalBottomSheet(
      shape: const ContinuousRectangleBorder(
          borderRadius: BorderRadius.only(
              topLeft: Radius.circular(30), topRight: Radius.circular(30))),
      context: context,
      builder: (context) {
        return Container(
          height: context.isMobile
              ? context.screenHeight * 0.70
              : context.screenHeight * 0.50,
          decoration: const BoxDecoration(
              borderRadius: BorderRadius.all(Radius.circular(50))),
          child: Padding(
            padding: context.isMobile
                ? const EdgeInsets.only(bottom: 10)
                : const EdgeInsets.only(bottom: 50),
            child: VStack(
              [
                SizedBox(
                  height: context.percentHeight * 5,
                ),
                VStack([
                  InkWell(
                    hoverColor: Colors.green,
                    child:
                        'Home'.text.uppercase.bold.underline.xl2.makeCentered(),
                    onTap: () {
                      Navigator.of(context)
                          .pushNamedAndRemoveUntil('/', (route) => false);
                    },
                  ),
                  Divider(
                    height: context.percentHeight * 5,
                  ),
                ]),
                VStack(
                  [
                    InkWell(
                      hoverColor: Colors.green,
                      child: 'Projects and Achievements'
                          .text
                          .uppercase
                          .bold
                          .underline
                          .xl2
                          .makeCentered(),
                      onTap: () {
                        Navigator.of(context).pushNamedAndRemoveUntil(
                            '/portfolio', (route) => false);
                      },
                    ),
                    Divider(
                      height: context.percentHeight * 5,
                    ),
                  ],
                ),
                VStack(
                  [
                    InkWell(
                      hoverColor: Colors.green,
                      child: 'Blogs'
                          .text
                          .uppercase
                          .bold
                          .underline
                          .xl2
                          .makeCentered(),
                      onTap: () {
                        Navigator.of(context).pushNamedAndRemoveUntil(
                            '/blogs', (route) => false);
                      },
                    ),
                    Divider(
                      height: context.percentHeight * 5,
                    ),
                  ],
                ),
                VStack(
                  [
                    InkWell(
                      hoverColor: Colors.green,
                      child: 'Resume'
                          .text
                          .uppercase
                          .bold
                          .underline
                          .xl2
                          .makeCentered(),
                      onTap: () {
                        var uri = Uri.base.scheme +
                            "://" +
                            Uri.base.host +
                            ":" +
                            Uri.base.port.toString();
                        uri = uri + "/assets/JayateerthaResume.pdf";
                        // print(uri);
                        launch_url_newtab(uri);
                      },
                    ),
                    Divider(
                      height: context.percentHeight * 1,
                    ),
                  ],
                ),
                Spacer(),
                Container(
                  color: Colors.green,
                  // padding: EdgeInsets.all(5),
                  //width: context.percentWidth * 0,
                  height: context.percentHeight * 5,
                  child: Align(
                    alignment: Alignment.bottomCenter,
                    child: HStack(
                      [
                        Container(
                          width: context.percentWidth * 5,
                        ),
                        InkWell(
                          hoverColor: Colors.green,
                          child: Icon(FontAwesomeIcons.facebook),
                          onTap: () {
                            const uri =
                                'https://www.facebook.com/jayateertha043';
                            launch_url_newtab(uri);
                          },
                        ),
                        Container(
                          width: context.percentWidth * 5,
                        ),
                        InkWell(
                          hoverColor: Colors.green,
                          child: Icon(FontAwesomeIcons.github),
                          onTap: () {
                            const uri = 'https://www.github.com/jayateertha043';
                            launch_url_newtab(uri);
                          },
                        ),
                        Container(
                          width: context.percentWidth * 5,
                        ),
                        InkWell(
                          hoverColor: Colors.green,
                          child: Icon(FontAwesomeIcons.twitter),
                          onTap: () {
                            const uri = 'https://www.twitter.com/jayateerthaG';
                            launch_url_newtab(uri);
                          },
                        ),
                        Container(
                          width: context.percentWidth * 5,
                        ),
                        InkWell(
                          hoverColor: Colors.green,
                          child: Icon(FontAwesomeIcons.envelope),
                          onTap: () {
                            const uri = 'mailto:jayateertha043@gmail.com';
                            launch_url_newtab(uri);
                          },
                        ),
                        Container(
                          width: context.percentWidth * 5,
                        ),
                        InkWell(
                          hoverColor: Colors.green,
                          child: Icon(FontAwesomeIcons.phoneAlt),
                          onTap: () {
                            const uri = 'tel:+919789098758';
                            launch_url_newtab(uri);
                          },
                        ),
                        Container(
                          width: context.percentWidth * 5,
                        ),
                      ],
                      alignment: MainAxisAlignment.spaceEvenly,
                      //crossAlignment: CrossAxisAlignment.end,
                    ),
                  ),
                ),
              ],
              alignment: MainAxisAlignment.center,
              crossAlignment: CrossAxisAlignment.center,
            ),
          ),
        );
      });
}
