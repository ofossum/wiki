# Freeplane features you were missing in FreeMind

This page lists important features of Freeplane that are not available in
FreeMind.

* Simple [script](/docs/#/scripting/Scripting ':ignore') invocation
* Simple hotkey assignment
* [add-ons](Add-ons.md) (packaged scripts, see below)
* Format panel
* Formulas
* Node formats
* Attributes panel
* Integration with Docear
* 1.3.x: Inline [LaTeX](/docs/#/user-documentation/LaTeX_in_Freeplane ':ignore') ("LaTeX in core") with LaTeX syntax highlighting editor
* Node details, 
* Freely positionable nodes,
* Summary nodes
* (conditional) Styles
* Different export features, including scripted ones
* [Approximate search](Approximate_search.md)
* (slightly) better printing support
* Hyperlinks available in nodes and in attributes

## Add-ons

* Several [add-ons](/docs/#/getting-started/Add-ons_(install) ':ignore') are available, including:
    * Pack and Go (ability to pull all FP dependencies into a single zip file for sharing with others)
    * Study planner (tool for assisting with the efficient use of study time, including pomodoro timers
    * Getting Things Done (task management application)
    * Wikdnode (comprehensive set of node text editing tools)
    * Wikdshell (test platform for building and testing groovy scripts)
    * Developer Tools
    * Additional icon libraries
    * Insert InLine Image (an alternative way of bringing images into FP and attaching them to nodes via details or node core)


## Migrating from FreeMind to Freeplane

* don't try to copy+paste from a FreeMind instance to Freeplane; instead open the FreeMind map in Freeplane (in another tab) and then copy+paste from inside Freeplane!
* Freeplane has Excel-like features and formulas:
    * numbers are recognized, i.e. "001"->"1" => avoid this by putting a quote (') at the beginning of the node text
    * same thing for dates
    * Formulas start with a '=': to avoid treating a node as a formula, (again) put a quote (') before the '='

## Features available only in FreeMind

* Collaboration mode

