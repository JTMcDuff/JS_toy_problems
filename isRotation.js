/*
  Assuming a method called isSubstring, determine if s1 is a roration of s2, using only one call to isSubstring.

  Algo

  All string rotations can be reduced to xy vs yx, where x is the first part of the string, and y is the second.  Thus, if we double one string, it will contain the other.

  Example:
  xy + xy = xyxy
  This contains yx

  Simply double one string and compare to the other

  Javascript has a .includes method, which we will use, here.
*/

function isRotation(s1,s2) {
	const doubleString = s1 + s1;
	return doubleString.includes(s2);
}