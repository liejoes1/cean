import 'package:flutter/material.dart';

class MyScaffold extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // Material is a conceptual piece of paper on which the UI appears.
    return Scaffold(
        body: Center(
            child: Column(
      mainAxisAlignment: MainAxisAlignment.center, // Center
      children: <Widget>[
        new MyLogoImage(),
        Text('Bus Application', style: TextStyle(color: Colors.grey))
      ],
    )));
  }
}

void main() {
  runApp(MaterialApp(
    title: 'My app', // used by the OS task switcher
    home: MyScaffold(),
  ));
}

class MyLogoImage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    var assetImage = new AssetImage('assets/logo.png');
    var image = new Image(image: assetImage, width: 100.0, height: 100.0);
    return new Container(child: image);
  }
}
