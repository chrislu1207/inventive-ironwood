var signIn = (props) => (
                    <div class="row">
                        <div class="col-sm-6 col-sm-offset-3 form-box">
                          <div class="form-top">
                            <div class="form-top-left">
                              <h3>Login to our site</h3>
                                <p>Enter your username and password to log on:</p>
                            </div>
                            <div class="form-top-right">
                              <i class="fa fa-lock"></i>
                            </div>
                            </div>
                            <div class="form-bottom">
                          <form role="form" action="" method="post" class="login-form">
                            <div class="form-group">
                              <label class="sr-only" for="form-username">Username</label>
                                <input type="text" name="form-username" placeholder="Username..." class="form-username form-control" id="form-username" />
                              </div>
                              <div class="form-group">
                                <label class="sr-only" for="form-password">Password</label>
                                <input type="password" name="form-password" placeholder="Password..." class="form-password form-control" id="form-password" />
                              </div>
                              <button type="submit" class="btn">Sign in!</button>
                          </form>
                        </div>
                        </div>
                    </div>
);

window.signIn = signIn;