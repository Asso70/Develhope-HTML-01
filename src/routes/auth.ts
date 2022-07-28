import {Router} from "express";
import {passport} from "../middleware/passport";

const router: Router = Router();

router.get("/login", (request, response, next) => {
  if(!request.query.redirectTo || typeof request.query.redirectTo !== "string") {
    response.status(400);
    return next("Missing redirection-to query parameter");
  }
  request.session.redirectTo = request.query.redirectTo;
  response.redirect("/auth/github/login");
});

router.get("/github/login", passport.authenticate("github", {
  scope: ["user:email"]
}));

router.get("/github/callback",
  // @ts-ignore
  passport.authenticate("github", {
    failureRedirect: "/auth/github/login",
    keepSessionInfo: true
  }),
  (request, response) => {
    if(typeof request.session.redirectTo !== "string") return response.status(500).end();
    response.redirect(request.session.redirectTo);
  }
);

router.get("/logout", (request, response, next) => {
  if(!request.query.redirectTo || typeof request.query.redirectTo !== "string") {
    response.status(400);
    return next("Missing redirection-to query parameter");
  }
  const redirectUrl = request.query.redirectTo;
  request.logout((error) => {
    if(error) return next(error);
    response.redirect(redirectUrl);
  });
});

export default router;