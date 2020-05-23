package com.ibm.fsd.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;


@Component
public class JwtFilter extends OncePerRequestFilter {
	
    @Autowired
    private JwtService jwtService;
    
    @Autowired
    private SecurityService securityService;

    @Override
    protected void doFilterInternal(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, FilterChain filterChain) 
    		throws ServletException, IOException {
        
    	// get Authorization
    	final String authHeader = httpServletRequest.getHeader("Authorization");
    	
    	String username = null;
    	String token = null;
    	
    	if (authHeader != null && authHeader.startsWith("Bearer ")) {
    		token = authHeader.substring(7);
    		username =  jwtService.extractUsername(token);
        }
    	
    	if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
    		UserDetails userDetails = this.securityService.loadUserByUsername(username);
    		
    		if (jwtService.validateToken(token, userDetails)) {
    			try {
	    			UsernamePasswordAuthenticationToken auth
	                		= new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
	    			auth.setDetails(new WebAuthenticationDetailsSource().buildDetails(httpServletRequest));
	    			SecurityContextHolder.getContext().setAuthentication(auth);
    			 } catch (Exception e) {
    	            logger.error("Set Authentication from jwt failed");
    	         }
    		}
    	}
    	filterChain.doFilter(httpServletRequest, httpServletResponse);
    }
}
