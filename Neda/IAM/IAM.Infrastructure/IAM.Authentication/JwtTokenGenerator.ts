import * as uuid from "uuid";
import jwt from "jsonwebtoken";

import { User } from "IAM.Domain";
import { IJwtTokenGenerator } from "IAM.Application";

export class JWTTokenGenerator implements IJwtTokenGenerator {
  GenerateToken(user: User) {
    const jwtSettings = {
      secret: "your-secret-key", // Replace with your secret key
      issuer: "your-issuer", // Replace with your issuer
      audience: "your-audience", // Replace with your audience
      expiryMinutes: 60, // Replace with your desired token expiry time in minutes
    };

    const claims = {
      sub: `${user.FirstName} ${user.LastName}`,
      given_name: user.FirstName,
      family_name: user.LastName,
      jti: uuid.v4(),
    };

    const token = jwt.sign(claims, jwtSettings.secret, {
      issuer: jwtSettings.issuer,
      audience: jwtSettings.audience,
      expiresIn: jwtSettings.expiryMinutes * 60, // Convert minutes to seconds
    });

    return token;
  }
}
