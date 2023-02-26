from django.shortcuts import render,redirect
from django.contrib.auth import login,logout,authenticate,get_user_model
from django.template.loader import render_to_string
from django.contrib.sites.shortcuts import get_current_site
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.utils.encoding import force_bytes, force_str
from django.core.mail import EmailMessage
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from django.views.generic import ListView
from .models import CustomUser


from .decorators import user_not_authenticated
from .tokens import account_activation_token
from .forms import UserRegistrationForm,UserLoginForm,UserUpdateForm


# Create your views here.
def home(request):
    return render(request,'main/base.html')

def signup_redirect(request):
    messages.error(request,"Something wrong here,it may be that u already have account!")
    return redirect('/')

def activate(request,uidb64,token):
    User=get_user_model()
    try:
        uid=force_str(urlsafe_base64_decode(uidb64))
        user=User.objects.get(pk=uid)
    except:
        user=None

    if user is not None and account_activation_token.check_token(user,token):
        user.is_active=True
        user.save()
        messages.success(request,"Thank you for your email confirmation.Now you can login your account.")
        return redirect('login')

    else:
        messages.error(request,"Activation link is invalid!")

    return redirect('/')

def activateEmail(request,user,to_email):
    mail_subject="Activate your account."
    message=render_to_string('registration/template_acivate_account.html',{
        "user":user.username,
        "domain":get_current_site(request).domain,
        "uid":urlsafe_base64_encode(force_bytes(user.pk)),
        "token":account_activation_token.make_token(user),
        "protocol":'https' if request.is_secure() else 'http'

    })
    email=EmailMessage(mail_subject,message,to=[to_email])
    if email.send():
        messages.success(request,f'Dear <b> ]{user}</b> ,please go to your email <b>{to_email}</b> inbox and click on activation link.')
    else:
        messages.error(request,f'Problem sending mail to {to_email} ,checkif you typed it correctly.')



@user_not_authenticated    
def register(request):
    
    if request.method=="POST":
        form=UserRegistrationForm(request.POST)
        if form.is_valid():
            user=form.save(commit=False)
            user.is_active=False
            user.save()
            activateEmail(request,user,form.cleaned_data.get('email'))
            return redirect('/home')
        else:
            for key,error in list(form.errors.values()):
                if key=='captcha' and error[0]=='This field is required.':
                    messages.error(request,"You must pass the reCaptcha test")
                    continue
                messages.error(request,error)

    
    else:
        form=UserRegistrationForm()

    return render(
        request=request,
        template_name='registration/register.html',
        context={"form":form}
    )

@login_required
def custom_logout(request):
    logout(request)
    messages.info(request,"Logged out successfully")
    return redirect("/")


@user_not_authenticated
def custom_login(request):
    if request.method=="POST":
        form=UserLoginForm(request=request,data=request.POST)
        if form.is_valid():
            user=authenticate(
                username=form.cleaned_data["username"],
                password=form.cleaned_data["password"],
            )
            if user is not None:
                login(request,user)
                messages.success(request,f"Hello <b>{user.username}</b> ! You have benn loggged in ")
                return redirect("home")
        else:
            for error in list(form.errors.values()):
                messages.error(request,error)

    form=UserLoginForm()

    return render(
        request=request,
        template_name='registration/login.html',
        context={"form":form}
    )

def profile(request,username):
    if request.method=="POST":
        user=request.user
        form=UserUpdateForm(request.POST,request.FILES,instance=user)
        if form.is_valid():
            user_form=form.save()
            messages.success(request,f"{user_form.username},your profile has been updated.")
            return redirect("profile",user_form.username)

        for error in list(form.errors.values()):
                messages.error(request,error)


    user=get_user_model().objects.filter(username=username).first()
    if user:
        form=UserUpdateForm(instance=user)
        return render(
            request=request,
            template_name='main/profile.html',
            context={"form":form}
        )
    return redirect('/home')

# @login_required
# def password_change(request):
#     user=request.user
#     #if request.method=='POST':
#     form=SetpasswordForm(user)
#         # if form.is_valid():
#         #     form.save()
#         #     messages.success(request,"Your password has been changed")
#         #     return redirect('login')
#         # else:
#         #     for error in list(form.errors.values()):
#         #         messages.error(request,error)
        
#     # form=SetPasswordForm(user)
#     return render(request,'registration/password_reset_confirm.html',{"form":form})

